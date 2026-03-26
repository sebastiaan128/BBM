import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  addMonths,
  subMonths,
  startOfWeek,
  endOfWeek,
  isBefore,
  startOfDay,
} from 'date-fns';
import { nl } from 'date-fns/locale';

interface Props {
  selectedDate: Date | null;
  onSelectDate: (date: Date) => void;
}

export default function BookingCalendar({ selectedDate, onSelectDate }: Props) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const today = startOfDay(new Date());

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const calendarStart = startOfWeek(monthStart, { weekStartsOn: 1 });
  const calendarEnd = endOfWeek(monthEnd, { weekStartsOn: 1 });
  const days = eachDayOfInterval({ start: calendarStart, end: calendarEnd });
  const weekDays = ['Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za', 'Zo'];

  const isAvailable = (date: Date) => {
    if (isBefore(date, today)) return false;
    if (date.getDay() === 0) return false;
    return true;
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-zinc-100">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
          className="p-2 hover:bg-zinc-100 rounded-lg transition-colors"
          aria-label="Vorige maand"
        >
          <ChevronLeft size={22} className="text-zinc-600" />
        </button>
        <h2 className="font-display text-2xl text-zinc-900 tracking-wide">
          {format(currentMonth, 'MMMM yyyy', { locale: nl })}
        </h2>
        <button
          onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
          className="p-2 hover:bg-zinc-100 rounded-lg transition-colors"
          aria-label="Volgende maand"
        >
          <ChevronRight size={22} className="text-zinc-600" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1.5 mb-2">
        {weekDays.map((d) => (
          <div key={d} className="text-center text-xs font-semibold text-zinc-400 py-2">
            {d}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1.5">
        {days.map((day) => {
          const inMonth = isSameMonth(day, currentMonth);
          const isSelected = selectedDate ? isSameDay(day, selectedDate) : false;
          const available = isAvailable(day);
          const isToday = isSameDay(day, today);

          return (
            <button
              key={day.toISOString()}
              onClick={() => available && onSelectDate(day)}
              disabled={!available}
              className={`
                aspect-square rounded-xl text-sm font-medium transition-all duration-150
                ${!inMonth ? 'text-zinc-200' : ''}
                ${inMonth && available && !isSelected ? 'text-zinc-700 hover:bg-[#7AC943]/10 hover:scale-105' : ''}
                ${!available ? 'cursor-not-allowed text-zinc-300' : 'cursor-pointer'}
                ${isSelected ? 'bg-[#7AC943] text-white shadow-lg scale-105' : ''}
                ${isToday && !isSelected ? 'ring-2 ring-[#7AC943]/50' : ''}
              `}
            >
              {format(day, 'd')}
            </button>
          );
        })}
      </div>

      <div className="mt-6 pt-5 border-t border-zinc-100 flex flex-wrap gap-4 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-3.5 h-3.5 bg-[#7AC943] rounded" />
          <span className="text-zinc-500">Geselecteerd</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3.5 h-3.5 border-2 border-[#7AC943] rounded" />
          <span className="text-zinc-500">Vandaag</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3.5 h-3.5 bg-zinc-100 rounded" />
          <span className="text-zinc-500">Niet beschikbaar</span>
        </div>
      </div>
    </div>
  );
}
