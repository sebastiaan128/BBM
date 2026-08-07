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
  addDays,
} from 'date-fns';
import { nl } from 'date-fns/locale';

/** Een proefdag moet minstens zoveel dagen vooruit worden geboekt. */
export const MIN_DAGEN_VOORUIT = 2;

interface Props {
  selectedDate: Date | null;
  onSelectDate: (date: Date) => void;
}

export default function BookingCalendar({ selectedDate, onSelectDate }: Props) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const today = startOfDay(new Date());
  /* Zo houdt Marcel tijd om de proefdag voor te bereiden en in te plannen. */
  const eersteDag = addDays(today, MIN_DAGEN_VOORUIT);

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const calendarStart = startOfWeek(monthStart, { weekStartsOn: 1 });
  const calendarEnd = endOfWeek(monthEnd, { weekStartsOn: 1 });
  const days = eachDayOfInterval({ start: calendarStart, end: calendarEnd });
  const weekDays = ['Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za', 'Zo'];

  const isAvailable = (date: Date) => {
    if (isBefore(date, eersteDag)) return false;
    if (date.getDay() === 0) return false;
    return true;
  };

  /* Terugbladeren naar maanden zonder beschikbare dagen heeft geen zin. */
  const kanTerug = !isBefore(startOfMonth(currentMonth), startOfMonth(eersteDag));

  return (
    <div className="border border-hairline bg-paper p-5 sm:p-6">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
          disabled={!kanTerug}
          className="p-2 -ml-2 text-stone hover:text-ink transition-colors disabled:opacity-25 disabled:hover:text-stone disabled:cursor-not-allowed"
          aria-label="Vorige maand"
        >
          <ChevronLeft size={20} />
        </button>
        <h3 className="display-md text-ink first-letter:uppercase">
          {format(currentMonth, 'MMMM yyyy', { locale: nl })}
        </h3>
        <button
          onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
          className="p-2 -mr-2 text-stone hover:text-ink transition-colors"
          aria-label="Volgende maand"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="grid grid-cols-7 border-b border-hairline mb-1.5">
        {weekDays.map((d) => (
          <div
            key={d}
            className="mono text-center text-[0.625rem] uppercase tracking-[0.1em] text-stone pb-2"
          >
            {d}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
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
              aria-label={
                available
                  ? format(day, 'EEEE d MMMM yyyy', { locale: nl })
                  : `${format(day, 'EEEE d MMMM yyyy', { locale: nl })}, niet beschikbaar`
              }
              aria-current={isToday ? 'date' : undefined}
              aria-pressed={isSelected}
              className={`mono aspect-square text-sm transition-colors duration-150 ${
                isSelected
                  ? 'bg-ink text-paper font-medium'
                  : !available
                    ? 'text-hairline cursor-not-allowed'
                    : inMonth
                      ? 'text-ink hover:bg-mist cursor-pointer'
                      : 'text-stone/40 hover:bg-mist cursor-pointer'
              } ${isToday && !isSelected ? 'shadow-[inset_0_-2px_0_var(--color-lime)]' : ''}`}
            >
              {format(day, 'd')}
            </button>
          );
        })}
      </div>

      <ul className="mt-6 pt-4 border-t border-hairline flex flex-wrap gap-x-5 gap-y-2 mono text-[0.625rem] uppercase tracking-[0.1em] text-stone">
        <li className="flex items-center gap-2">
          <span className="w-3 h-3 bg-ink" aria-hidden="true" /> Gekozen
        </li>
        <li className="flex items-center gap-2">
          <span className="w-3 h-3 border-b-2 border-lime" aria-hidden="true" /> Vandaag
        </li>
        <li className="flex items-center gap-2">
          <span className="w-3 h-3 bg-hairline" aria-hidden="true" /> Niet te boeken
        </li>
      </ul>

      <p className="mt-4 text-sm text-stone leading-relaxed">
        Je plant een proefdag minimaal {MIN_DAGEN_VOORUIT} dagen vooruit. De eerste dag die je kunt
        kiezen is{' '}
        <strong className="font-medium text-ink">
          {format(eersteDag.getDay() === 0 ? addDays(eersteDag, 1) : eersteDag, 'EEEE d MMMM', {
            locale: nl,
          })}
        </strong>
        . Op zondag is de studio gesloten.
      </p>
    </div>
  );
}
