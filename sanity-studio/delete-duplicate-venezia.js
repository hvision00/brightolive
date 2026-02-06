import { createClient } from '@sanity/client';

const client = createClient({
  projectId: '8i61ocow',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: 'skL77OcAWKxBIwLi7HyvIb2YTQLqjC5i7xGgQiPpKCmHqKFG155P1SA169AoW9bdAapCYkiD6mpe3mwsjQPS4YfUwqhziGPacyGRLb2I3ckorTXeRNcu5lHDmY8U2YyJUOiVylobA9lwosNrsE099BSR0vSDA0DQuzDRAGB95EWs7dhtPBmH',
});

async function deleteDuplicateVenezia() {
  console.log('🔍 Cerco blog post "Venezia" duplicati...\n');

  try {
    // Trova tutti i blog post con slug venezia
    const veneziaPosts = await client.fetch(
      `*[_type == "blogPost" && slug.current == "venezia-matrimonio"] | order(_createdAt asc) {
        _id,
        _createdAt,
        title
      }`
    );

    console.log(`   📊 Trovati ${veneziaPosts.length} blog post "Venezia"\n`);

    if (veneziaPosts.length <= 1) {
      console.log('   ✅ Nessun duplicato da eliminare!\n');
      return;
    }

    // Mostra tutti i post trovati
    veneziaPosts.forEach((post, index) => {
      console.log(`   ${index + 1}. ID: ${post._id}`);
      console.log(`      Creato: ${new Date(post._createdAt).toLocaleString('it-IT')}`);
      console.log(`      Titolo: ${post.title?.it || 'N/A'}\n`);
    });

    // Tengo il primo (più vecchio) ed elimino i duplicati
    const toKeep = veneziaPosts[0];
    const toDelete = veneziaPosts.slice(1);

    console.log(`   ✅ Mantengo: ${toKeep._id} (${new Date(toKeep._createdAt).toLocaleString('it-IT')})`);
    console.log(`   🗑️  Elimino ${toDelete.length} duplicato/i:\n`);

    for (const post of toDelete) {
      console.log(`      - ${post._id} (${new Date(post._createdAt).toLocaleString('it-IT')})`);
      await client.delete(post._id);
    }

    console.log('\n🎉 FATTO! Duplicati eliminati.\n');

  } catch (error) {
    console.error('   ❌ Errore:', error.message);
  }
}

deleteDuplicateVenezia().catch(console.error);
