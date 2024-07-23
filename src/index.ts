import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { Request, Response } from 'express';
import { router } from './routes';
import db from './config/mongo';

// cleaner code for PORT
const PORT = process.env.PORT || 7000

// node-express server declared
const be_server = express();

// express add-ons -> MIDDLEWARE
be_server.use(express.json()); // read json
be_server.use(express.urlencoded({ extended: true })); // extend urls
be_server.use(cors()); // cors security

// get request for testing
be_server.get('/', (req: Request, res: Response) => {
    res.json({ message: 'I hear your request' });
});

// using custom routes (bookings)
be_server.use(router);
db().then(() => console.log('db conection successfull'));

// set port to mongooseDBConnection
be_server.listen(PORT, () => {
    console.log(`Server is running on localhost:${PORT}`);
});

be_server.listen()

export default be_server;