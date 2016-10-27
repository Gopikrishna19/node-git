import {exec} from 'child_process';

function getDefaultPayload(request) {
  return Object.assign({}, request.payload, {
    name: 'repo'
  });
}

const GET = (request, reply) => {
  const payload = getDefaultPayload(request);

  exec(`node-git list --name ${payload.name} --json`, (err, stdout) => {
    if (err) {
      const response = reply(err.toString());

      response.statusCode = 500;
      response.type('text/plain');
    } else {
      reply(stdout);
    }
  });
};

const POST = (request, reply) => {
  const payload = getDefaultPayload(request);

  exec(`node-git create --name ${payload.name}`, err => {
    if (err) {
      const response = reply(err.toString());

      response.statusCode = 500;
      response.type('text/plain');
    } else {
      reply(JSON.stringify({
        message: `Successfully created ${repo} repository`
      }));
    }
  });
};

export default {
  GET,
  POST
};
