import { createClient } from '@sanity/client';

const client = createClient({
  projectId: '8i61ocow',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: 'skL77OcAWKxBIwLi7HyvIb2YTQLqjC5i7xGgQiPpKCmHqKFG155P1SA169AoW9bdAapCYkiD6mpe3mwsjQPS4YfUwqhziGPacyGRLb2I3ckorTXeRNcu5lHDmY8U2YyJUOiVylobA9lwosNrsE099BSR0vSDA0DQuzDRAGB95EWs7dhtPBmH',
});

async function cleanDrafts() {
  console.log('🔍 Cerco draft inutili...\n');

  try {
    // Trova tutti i draft di blog post
    const drafts = await client.fetch(
      `*[_type == "blogPost" && _id match "drafts.*"] {
        _id,
        slug,
        title
      }`
    );

    console.log(`   📊 Trovati ${drafts.length} draft\n`);

    if (drafts.length === 0) {
      console.log('   ✅ Nessun draft da eliminare!\n');
      return;
    }

    // Mostra tutti i draft trovati
    drafts.forEach((draft, index) => {
      const publishedId = draft._id.replace('drafts.', '');
      console.log(`   ${index + 1}. Draft: ${draft._id}`);
      console.log(`      Documento: ${publishedId}`);
      console.log(`      Titolo: ${draft.title?.it || 'N/A'}\n`);
    });

    console.log('   💡 NOTA: I draft sono versioni in modifica.');
    console.log('   💡 Clicca "Publish" in Sanity Studio per pubblicarli.');
    console.log('   💡 Se vuoi ELIMINARE i draft non salvati:\n');
    
    // Non eliminiamo automaticamente, chiediamo conferma
    console.log('   ⚠️  Per eliminare, decommentare la riga di delete nello script.\n');

    // Decommentare per eliminare i draft:
    // for (const draft of drafts) {
    //   console.log(`   🗑️  Eliminando: ${draft._id}`);
    //   await client.delete(draft._id);
    // }
    // console.log('\n🎉 Draft eliminati!\n');

  } catch (error) {
    console.error('   ❌ Errore:', error.message);
  }
}

cleanDrafts().catch(console.error);
