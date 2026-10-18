/**
 * Verstuurt een formulier naar Netlify Forms. Netlify herkent een formulier
 * alleen als het bij het deployen in de HTML staat; omdat React de echte
 * formulieren pas in de browser bouwt, staan er in index.html verborgen
 * kopieën met dezelfde naam en velden. Voeg je hier een veld toe, zet het
 * daar dan ook bij, anders gooit Netlify het weg.
 *
 * Inzendingen staan in het Netlify-dashboard onder Forms.
 */
export async function submitNetlifyForm(formName: string, data: Record<string, string>) {
  const res = await fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ 'form-name': formName, ...data }).toString(),
  });
  if (!res.ok) throw new Error(`Formulier ${formName}: ${res.status}`);
}
