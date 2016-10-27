export default (url, options) =>
  window.fetch(url, options)
    .then(response => response.json());
