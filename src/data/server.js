import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';

const app = express();

const uri = "mongodb+srv://admin:123@cluster0.2hxqm.mongodb.net/?retryWrites=true&w=majority";

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