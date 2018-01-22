export const setupRedirect = (url, ignore) => {
  chrome.webRequest.onBeforeRequest.addListener((e) => {
    const path = e.url.split('/').slice(-1)[0];

    if (!ignore.includes(path)) {
      return {
        redirectUrl: `chrome-extension://${chrome.runtime.id}/{url}`,
      };
    }
  }, {
    urls: [`chrome-extension://${chrome.runtime.id}/*`],
  }, [
    'blocking',
  ]);
};
