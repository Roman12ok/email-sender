const express = require('express');
const app = express();
require('dotenv').config()
const port = 3100;
const cors = require('cors');
const nodemailer = require('nodemailer');

app.use(cors());
app.use(express.json());

app.post('/api', (req, res) => {
  var a = { Email, Name, Numd, Message } = req.body;
  console.table(a);
  res.send('Received the data successfully'); 
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'romanenglish889@gmail.com',
    pass: 'yvnhumrlymjmutoa' // naturally, replace both with your real credentials or an application-specific password
  }
});

const mailOptions = {
  from: 'romanenglish889@gmail.com',
  to: 'romanenglish889@gmail.com',
  subject: 'Invoices due',
  text: 'Dsvewney.',
  html: `
  <h1>${Email}</h1>
  <h1>${Name}</h1>
  <h1>${Numd}</h1>
  <h1>${Message}</h1>
  `
};

transporter.sendMail(mailOptions, (error, info) =>{
  if (error) {
	console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});


app.listen(3100, () => console.log(`listening on port ${port}!`));