import HapiReactViews from 'hapi-react-views';
import {Server} from 'hapi';
import Vision from 'vision';
import Webpack from 'webpack';
import WebpackPlugin from 'hapi-webpack-plugin';
import config from './webpack.config';
import {registerRoutes} from './api';

const compiler = new Webpack(config);
const assets = {noInfo: true};
const server = new Server();

server.connection({
  host: 'localhost',
  port: '8080'
});

registerRoutes(server);

server.route({
  handler: (request, reply) => reply.view('index'),
  method: 'GET',
  path: '/'
});

server.register(Vision, err => {
  if (err) {
    console.log('Failed to load:', err); // eslint-disable-line no-console
  }

  server.views({
    compileOptions: {
      useNodeJsx: false
    },
    engines: {
      js: HapiReactViews
    },
    path: '.',
    relativeTo: __dirname
  });
});

server.register({
  options: {
    assets,
    compiler
  },
  register: WebpackPlugin
}, () => {
  server.start();
});
