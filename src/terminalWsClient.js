class TerminalWSClient {
    static socket = null;

    constructor() {
        if (TerminalWSClient.socket) {
            console.error('Только одно соединение');
            return;
        }

        TerminalWSClient.socket = new WebSocket("ws://localhost:8080", "echo-protocol");
        TerminalWSClient.socket.onopen = () => {
            console.log("Соединение установлено.");
        };
        TerminalWSClient.socket.onclose = (event) => {
            console.log('Код: ' + event.code + ' причина: ' + event.reason, event.wasClean);
        };
        TerminalWSClient.socket.onmessage = (event) => {
            console.log("Получены данные " + event.data);
        };
        TerminalWSClient.socket.onerror = (error) => {
            console.log("Ошибка " + error.message);
        };
    }

    orders(figi = 'asdjasd') {
        TerminalWSClient.socket.send(JSON.stringify({
            type: 'subscribeOrders',
            figi
        }));
    }

    close() {
        TerminalWSClient.socket.close();
        TerminalWSClient.socket = null;
    }
};

export default TerminalWSClient