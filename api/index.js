export const registerRoutes = server => {
  const routes = [
    'repository'
  ];

  routes.forEach(path => {
    const handlers = require(`./${path}`).default;

    Object.keys(handlers).forEach(
      method =>
        server.route({
          handler: handlers[method],
          method,
          path: `/${path}`
        })
    );
  });
};
