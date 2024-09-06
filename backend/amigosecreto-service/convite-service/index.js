const nodemailer = require('nodemailer');
const transport = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    auth: {
        user: "meuemail@email.com",
        pass: "senhaemail"
    }
})

transport.sendMail({
    from: 'meuemail@email.com',
    to: 'destinoemail@email.com',
    subject: 'convite amigo secreto',
    text: 'convido você ao nosso amigo secreto'
})