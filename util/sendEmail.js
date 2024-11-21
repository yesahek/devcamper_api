const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
    
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 587,
  auth: {
  user: process.env.SMTP_EMAIL,
  pass: process.env.SMTP_PASSWORD,
  },
});

  // send mail with defined transport object
  const message ={
    from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
    to: options.email, 
    subject: options.subject,
    text: options.message, 
  }

  const info = await transporter.sendMail(message);

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

module.exports = sendEmail;
