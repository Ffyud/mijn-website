import express from 'express';

const app = express();
const PORT = 3000;

app.listen(PORT, () =>
    console.log(`De server doet het op ${PORT}`)
);