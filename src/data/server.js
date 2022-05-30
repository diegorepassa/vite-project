import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient, ServerApiVersion } from 'mongodb';

const app = express();

const uri = "mongodb+srv://admin:teste123@crud.hbljf.mongodb.net/?retryWrites=true&w=majority";

MongoClient.connect(uri, (err, db) => {
  if (err) return console.error(err);
  console.log('Connected to MongoDB');
});

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(8080, () => {
    console.log('listening on port 8080');
})

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: '.' })
})

app.post('/depoimentos', (req, res) => {
    console.log(req.body);
    res.send(req.body);
})