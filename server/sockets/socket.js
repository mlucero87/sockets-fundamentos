const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuario Conectado');

    client.emit('enviarMensaje', {
        usurio: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    })

    client.on('disconnect', () => {
        console.log('Usuario Desconectado');
    });

    client.on('enviarMensaje', (data, callback) => {
        client.broadcast.emit('enviarMensaje', data);
        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'Todo salio bien!'
        //     });
        // } else {
        //     callback({
        //         resp: 'Todo salio MAL!!!!!!'
        //     });
        // }
    });
});