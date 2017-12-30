const sendgrid = require('sendgrid');
const helper = sendgrid.mail;
const keys = require('../config/keys');

// const Mailer extends helper.Mail {
//   constructor({firstName, lastName, email}, content){
//     super();

//     this.from_email = new helper.Email(email);
//   }
// }

// module.exports = Mailer;