var socket = io();
//escuchar 
socket.on('connect', function(args) {
    console.log('conectado al servidor.');
})

socket.on('disconnect', function(args) {
    console.log('perdimos conexion con el servidor.');
})

//enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Matias',
    mensaje: 'Hola servidor'
}, function(resp) {
    console.log('Respuesta: ', resp);
});
//escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('servidor:', mensaje);
});