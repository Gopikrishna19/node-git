import {exec} from 'child_process';

export default {
  POST: (request, reply) => {
    if (!request.payload || !request.payload.name) {
      const response = reply();

      response.statusCode = 500;

      return;
    }

    const repo = request.payload.name;

    exec(`node-git create --name ${repo}`, err => {
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
  }
};
