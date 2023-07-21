const express = require('express');
const app = express();
require('dotenv').config();
const port = 5000;
const cors = require('cors');
const nodemailer = require('nodemailer');

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.PASSWORDS 
  }
});

app.post('/api', (req, res) => {
  const { Email, Name, Numd, Message } = req.body;
  console.table(req.body); 
  res.send('Received the data successfully');

  const html = `<h1>${Name}</h1><br/><h1>${Email}</h1><br/><h2>${Numd}</h2><br/><p>${Message}</p>`;

  const mailOptions = {
    from:  process.env.EMAIL_ADDRESS,
    to:  process.env.EMAIL_ADDRESS,
    subject: `${Name}`,
    html: html
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
});

app.listen(process.env.PORT || port, () => console.log(`listening on port ${port} or ${process.env.PORT}!`));
