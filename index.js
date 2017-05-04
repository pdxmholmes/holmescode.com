const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({
    address: '0.0.0.0',
    port: process.env.PORT || 5000
});

server.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
        reply({ success: true, message: 'Hello World' })
    }
});

server.start()
    .then(() => console.log('Server started'));
