async function loadCards(targetId, dataPath, mapper) {
  const target = document.getElementById(targetId);
  if (!target) return;
  try {
    const res = await fetch(dataPath);
    const data = await res.json();
    target.innerHTML = data.map(mapper).join('');
  } catch (err) {
    target.innerHTML = '<p class="small">Content is temporarily unavailable.</p>';
  }
}

loadCards('services-list', 'data/services.json', (item) => `
  <article class="card">
    <h3>${item.title}</h3>
    <p>${item.summary}</p>
    <a href="services/${item.slug}">View service details</a>
  </article>
`);

loadCards('species-list', 'data/species.json', (item) => `
  <article class="card">
    <h3>${item.title}</h3>
    <p>Keyword focus: ${item.keyword}. Learn sample guidance and related avian DNA testing options.</p>
    <a href="species/${item.slug}">Explore species page</a>
  </article>
`);

loadCards('blog-preview', 'data/blog.json', (item) => `
  <article class="card">
    <h3><a href="${item.url}">${item.title}</a></h3>
    <p class="meta">${item.date}</p>
    <p>${item.excerpt}</p>
    <a href="${item.url}">Read guide</a>
  </article>
`);
