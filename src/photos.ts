/**
 * Alle foto's uit de studio in Elst. De waarden zijn de naam van de foto,
 * niet een pad: Photo.tsx zoekt in photoAssets op welke breedtes er van
 * bestaan en bouwt daar de srcset uit op.
 *
 * Bijna alle foto's op de site staan inmiddels in src/content/ (en zijn via
 * /admin te wisselen); deze lijst is er voor de paar plekken in de code zelf.
 *
 * De bronbestanden staan in /fotos-bron, de uitgeleverde WebP-varianten in
 * /public/photos. Bij elke build maakt scripts/optimaliseer-fotos.mjs de
 * varianten van nieuwe foto's aan.
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
  profielMarvin: 'profiel-marvin',
  winnaars2021: 'winnaars-2021',
  winnaars2022: 'winnaars-2022',
  winnaars2023: 'winnaars-2023',
  winnaars2024: 'winnaars-2024',
  winnaars2025: 'winnaars-2025',
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
