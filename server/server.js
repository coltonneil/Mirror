import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import Issue from './models/FooterLink';

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/mirror');

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDB database connection established successfully!');
});

router.route('/footerLinks').get((req, res) => {
  connection.collection('footerLinks').find().toArray().then(
    results => res.json(results)
  )
});

app.use('/', router);

app.listen(4000, () => console.log(`Express server running on port 4000`));
