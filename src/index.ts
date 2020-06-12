import Server from './server/server';
import router from './router/router';

const server = Server.init(3001);
server.app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    next();
});
server.app.use(router);


server.start( () => {
    console.log('Servidor en el puerto 3001');
});


