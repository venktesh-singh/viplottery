import express from 'express';
import configViewEngine from './config/configEngine.js';
import routes from './routes/web.js';
import webRoutes from './routes/web.js';
//import cronJobContronler from './controllers/cronJobContronler.js';
import { cronJobGame1p } from './controllers/cronJobContronler.js';
require('dotenv').config();
let cookieParser = require('cookie-parser');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const port = process.env.PORT || 3306;

app.use(cookieParser());
// app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// setup viewEngine
configViewEngine(app);
// init Web Routes
routes.initWebRouter(app);

// Cron game 1 Phut 
cronJobContronler.cronJobGame1p(io);

// Check xem ai connect vào sever 
socketIoController.sendMessageAdmin(io);

// app.all('*', (req, res) => {
//     return res.render("404.ejs"); 
// });

server.listen(port, () => {
    console.log("Connected success port: " + port);
});

