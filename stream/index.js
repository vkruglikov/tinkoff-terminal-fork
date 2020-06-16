import http from 'http';
import {server as WebSocketServer} from 'websocket';
import OpenAPI from '@tinkoff/invest-openapi-js-sdk';

const apiURL = 'https://api-invest.tinkoff.ru/openapi';
const socketURL = 'wss://api-invest.tinkoff.ru/openapi/md/v1/md-openapi/ws';

const server = http.createServer(function (request, response) {
    response.writeHead(404);
    response.end();
});

server.listen(8080, function () {
    console.log((new Date()) + ' Server is listening on port 8080');
});

const wsServer = new WebSocketServer({
    httpServer: server,
    autoAcceptConnections: false
});

wsServer.on('request', function (request) {
    const connection = request.accept('echo-protocol', request.origin);
    const secretToken = request.cookies.find((cookie) => cookie.name === 'tinkoffAuthToken') || {};
    const api = new OpenAPI({apiURL, secretToken: secretToken.value, socketURL});
    
    connection.on('message', function (message) {
        if (message.type === 'utf8') {
            console.log('Received Message: ' + message.utf8Data);
            connection.sendUTF(message.utf8Data);
        }
    });

    connection.on('close', function () {
        console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
    });
});