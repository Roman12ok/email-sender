const express = require('express');
const app = express();
require('dotenv').config()
const port = 500;
const cors = require('cors');
// const nodemailer = require('nodemailer');

app.use(cors());
app.use(express.json());

app.post('/api', (req, res) => {
  var a = { Email, Name, Numd, Message } = req.body;
  console.table(a);
  res.send('Received the data successfully'); 
});

app.get('/r', (req, res) => {
  res.send('dfgdgegre')
})

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'romanenglish889@gmail.com',
//     pass: 'yvnhumrlymjmutoa' // naturally, replace both with your real credentials or an application-specific password
//   }
// });

// const mailOptions = {
//   from: 'romanenglish889@gmail.com',
//   to: 'romanenglish889@gmail.com',
//   subject: 'Invoices due',
//   text: 'Dsvewney.',
// };

// transporter.sendMail(mailOptions, (error, info) =>{
//   if (error) {
// 	console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });


app.listen(port, () => console.log(`listening on port ${port}!`));