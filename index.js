const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({
    address: '0.0.0.0',
    port: process.env.PORT || 5000
});

server.route({
    method: 'GET',
    path: '/',
    handler: (request, response) => {
        response({ success: true })
    }
});

server.start()
    .then(() => console.log('Server started'));
