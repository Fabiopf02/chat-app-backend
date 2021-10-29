import cors from 'cors';
import express from 'express';
import { createServer } from 'http';
import { routes } from './routes';

const app = express();
const server = createServer(app);
// const io = new Server(server);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);

// io.on('connection', socket => {
//   console.log(socket);
// });

server.listen(3333, () => {
  console.log('Server running in http://localhost:3333');
});
