const getMeta = (doc, query) => {
  const element = doc.querySelector(query);
  return element && (element.content || element.innerText);
}


export const getPageInfo = url => new Promise((resolve, reject) => {
  fetch(`https://cors-anywhere.herokuapp.com/${url}`)
    .then(res => res.text())
    .then((html) => {
      const doc = new DOMParser().parseFromString(html, "text/html");

      resolve({
        title: getMeta(doc, "title"),
        description: getMeta(doc, "meta[property='og:description']"),
        image: getMeta(doc, "meta[property='og:image']"),
      })
    })
    .catch(reject)
});
