import express from 'express';

const app = express();
const PORT = 3000;

app.use('/', express.static('public'));

// app.get('/', (req, res) => {
//     res.send(`yolo`)
// });

app.listen(PORT, () => {
    console.log(`De server doet het op ${PORT}`);
});
