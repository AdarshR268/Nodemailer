require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json());



// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use Gmail as the email service
  auth: {
    user: process.env.GAPPMAIL, // Your Gmail email
    pass: process.env.GAPSWD,   // Your Gmail password or app password
  },
});

// API endpoint to send OTP email
app.post('/send-otp', (req, res) => {
  const { email, otp } = req.body;

  const mailOptions = {
    from: process.env.GAPPMAIL, // Sender email
    to: email,                 // Recipient email
    subject: 'OTP for Registration', // Email subject
    text: `Your OTP is: ${otp}`,    // Email body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ error: 'Failed to send OTP email' });
    }
    console.log('Email sent:', info.response);
    res.status(200).json({ message: 'OTP sent successfully' });
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Node.js email service running on port ${PORT}`);
});