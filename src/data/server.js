import express from 'express';
const app = express();

console.log('Server is running');

app.listen(8080, () => {
    console.log('listening on port 8080');
})

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: '.' })
})