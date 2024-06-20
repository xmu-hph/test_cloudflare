addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  url.hostname = 'https://www.google.com'; // 目标服务器地址
  const newRequest = new Request(url, event.request);
  event.respondWith(fetch(newRequest));
});
