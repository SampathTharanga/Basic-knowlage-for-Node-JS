var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'stharanga41@gmail.com',
        pass: '19960303'
    }
});

var mailOptions = {
    from: 'stharanga41@gmail.com',
    to: 'sampaththaranga13@gmail.com', // Place 01
    subject: 'Sending email using Node.JS',
    text: 'That way easy!' // Plcae 02
};

transporter.sendMail(mailOptions, function(error, info) {
    if(error){
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});

// Place 01
// Multiple Receivers
//  to: 'myfriend@yahoo.com, myotherfriend@yahoo.com',

// Plcae 02
// Send HTML
// html: '<h1>Welcome</h1><p>That was easy!</p>'