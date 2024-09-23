import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const EmailSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
});
const Email = mongoose.model('Email', EmailSchema);

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  host:'smtp.gmail.com',
  post:465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// API route to handle email subscription
app.post('/api/subscribe', async (req, res) => {
  const { email } = req.body;

  try {
    const existingEmail = await Email.findOne({ email });
    if (existingEmail) {
      return res.json({ success: false, message: 'This email is already subscribed.' });
    }

    const newEmail = new Email({ email });
    await newEmail.save();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Welcome to FairyFables!',
      html: '<p>Thank you for subscribing to FairyFables. Stay tuned for magical bedtime stories!</p>',
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error); 
        return res.status(500).json({ success: false, message: 'Failed to send confirmation email.' });
      }
      res.json({ success: true, message: 'Email saved and confirmation sent.' });
    });

  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

