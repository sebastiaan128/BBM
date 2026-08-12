/**
 * Alle foto's uit de studio in Elst. De waarden zijn de naam van de foto,
 * niet een pad: Photo.tsx zoekt in photoAssets op welke breedtes er van
 * bestaan en bouwt daar de srcset uit op.
 *
 * De bronbestanden staan in /fotos-bron, de uitgeleverde WebP-varianten in
 * /public/photos, en de onbewerkte originelen lokaal in /fotos-origineel
 * (niet in git). Nieuwe foto in /fotos-bron gezet? Draai daarna
 * ./scripts/optimaliseer-fotos.sh.
 */

export const photo = {
  studioHal: 'studio-hal',
  studioPlafond: 'studio-plafond',
  matten: 'matten',
  kettlebellDaglicht: 'kettlebell-daglicht',
  kettlebellSquat: 'kettlebell-squat',
  kettlebellZijkant: 'kettlebell-zijkant',
  kettlebellDetail: 'kettlebell-detail',
  kettlebells: 'kettlebells',
  duoMedicijnbal: 'duo-medicijnbal',
  coaching: 'coaching',
  handdruk: 'handdruk',
  trainerPortret: 'trainer-portret',
  trainerRek: 'trainer-rek',
  deadlift: 'deadlift',
  roeienHalterschijf: 'roeien-halterschijf',
  schouderdrukken: 'schouderdrukken',
  dumbbellPress: 'dumbbell-press',
  dumbbellDuo: 'dumbbell-duo',
  duoHalters: 'duo-halters',
  duoHalters2: 'duo-halters-2',
  bicepsBank: 'biceps-bank',
  bicepsClose: 'biceps-close',
  kabelPull: 'kabel-pull',
  kabelRow: 'kabel-row',
  beenpers: 'beenpers',
  emsVest: 'ems-vest',
  emsVest2: 'ems-vest-2',
  farmerswalk: 'farmerswalk',
  farmerswalk2: 'farmerswalk-2',
  buitenSquat: 'buiten-squat',
  buitenHalter: 'buiten-halter',
  opdrukken: 'opdrukken',
  opdrukken2: 'opdrukken-2',
  lunge: 'lunge',
  lunge2: 'lunge-2',
  schoudersHalters: 'schouders-halters',
  cardioDuo: 'cardio-duo',
  cardioLoopband: 'cardio-loopband',
  highFive: 'high-five',
  loopband: 'loopband',
  schijven: 'schijven',
  schijvenRek: 'schijven-rek',
  dumbbellrek: 'dumbbellrek',
  koeling: 'koeling',
  squatrek: 'squatrek',
  fietsen: 'fietsen',
} as const;

/** Fotoreeksen per trainingsvorm, voor de galerijen op de detailpagina's. */
export const gallery = {
  smallGroup: [
    photo.duoMedicijnbal,
    photo.kettlebellSquat,
    photo.highFive,
    photo.duoHalters,
    photo.cardioDuo,
    photo.studioHal,
  ],
  bootcamp: [
    photo.farmerswalk,
    photo.buitenSquat,
    photo.buitenHalter,
    photo.opdrukken,
    photo.lunge,
    photo.farmerswalk2,
  ],
  tabata: [
    photo.opdrukken,
    photo.opdrukken2,
    photo.lunge,
    photo.lunge2,
    photo.dumbbellDuo,
    photo.kettlebellZijkant,
  ],
  circuit: [
    photo.kabelPull,
    photo.kabelRow,
    photo.beenpers,
    photo.bicepsBank,
    photo.dumbbellPress,
    photo.squatrek,
  ],
  kids: [
    photo.opdrukken2,
    photo.lunge,
    photo.matten,
    photo.kettlebellSquat,
    photo.opdrukken,
    photo.studioHal,
  ],
  corporate: [
    photo.duoHalters,
    photo.duoHalters2,
    photo.handdruk,
    photo.coaching,
    photo.studioHal,
    photo.koeling,
  ],
  personalTraining: [
    photo.coaching,
    photo.emsVest,
    photo.deadlift,
    photo.roeienHalterschijf,
    photo.bicepsClose,
    photo.handdruk,
  ],
} as const;
