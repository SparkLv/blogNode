var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

module.exports = {
    init() {
        app.get('/', function (req, res) {
            res.send('sss');
            io.emit('message', 'newws');
        });
        io.on('connection', (socket) => {
            const id = socket.request.url.split('?')[1].split('&')[0].split('=')[1];
            socket.join('room1', () => {
                io.to('room1').emit('message', '只有一房间才能看到'); // broadcast to everyone in the room
            });
        });

        http.listen(2500, function () {
            console.log('listening on *:3000');
        });
    }
}