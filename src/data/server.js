import express from 'express';
import bodyParser from 'body-parser';
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

console.log('Server is running');

app.listen(8080, () => {
    console.log('listening on port 8080');
})

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: '.' })
})

app.post('/depoimentos', (req, res) => {
    console.log(req.body);
    res.send('ok');
})