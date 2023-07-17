const express = require('express');
const app = express();
require('dotenv').config()
const port = process.env.PORT;
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome')
})

app.post('/api', (req, res) => {
  const a = { Email, Name, Numd, Message } = req.body;
  console.table(a);
  res.send('Received the data successfully'); 
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));