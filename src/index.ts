import Server from './server/server';
import router from './router/router';
import MySql from './mysqul/mysql';

const server = Server.init(3001);
server.app.use(router);


server.start( () => {
    console.log('Servidor en el puerto 3001');
});


