const getMeta = (doc, query, attr) => {
  if (attr) {
    const element = doc.querySelectorAll(query)[doc.querySelectorAll(query).length - 1];
    return element && element[attr];
  } else {
    const element = doc.querySelector(query);
    return element && (element.content || element.innerText) && (element.content || element.innerText).trim();
  }
  // && (element.content || element.innerText).replace(/[^\x00-\x7F]/g, "").trim();
};


export const getPageInfo = url => new Promise((resolve, reject) => {
  fetch(`https://cors-anywhere.herokuapp.com/${url}`)
    .then(res => res.text())
    .then((html) => {
      const doc = new DOMParser().parseFromString(html, 'text/html');

      resolve({
        title: getMeta(doc, 'title'),
        description: getMeta(doc, "meta[property='og:description']") || getMeta(doc, 'meta[name=description]'),
        image: getMeta(doc, "meta[property='og:image']") || getMeta(doc, 'link[rel=icon]', 'href'),
      });
    })
    .catch(reject);
});
