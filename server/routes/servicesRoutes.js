var helper = require('sendgrid').mail;
const keys = require('../config/keys')
// sgMail.setApiKey(keys.sendGridKey);

module.exports = (app) => {
  app.post("/services/package/questionnaire",(req,res) => {
    const{firstName, lastName, email, age, weight, height} = req.body

    // const fromEmail = new helper.Email(email);
    // const toEmail = new helper.Email('jamalhamid558@gmail.com');
    // const subject = 'This is the subject for the email'
    // const content = new helper.Content('text/plain', 'this is the content');
    // const mail = new helper.Mail(fromEmail, subject, toEmail, content);

    const sg = require('sendgrid')(keys.sendGridKey);

    var request = sg.emptyRequest({
      method: 'POST',
      path: '/v3/mail/send',
      body: {
        personalizations: [
        {
          to: [
            {
              email: 'jamalhamid558@gmail.com'
            }
          ],
          subject: 'Sending with SendGrid is Fun'
        }
      ],
      from: {
        email: 'joeschmoe@gmail.com'
      },
      content: [
        {
          type: 'text/html',
          value: `<div> <h1>${firstName + " " + lastName}</h1></div>`
      }
    ]
  }
});
 
    sg.API(request)
  .then(function (response) {
    console.log(response.statusCode);
    console.log(response.body);
    console.log(response.headers);
  })
  .catch(function (error) {
    // error is an instance of SendGridError
    // The full response is attached to error.response
    console.log(error.response.statusCode);
  });

    console.log(firstName);
    // const msg = {
    //   to: 'jamalhamid558@gmail.com',
    //   from: email,
    //   subject: 'Hello world',
    //   text: 'Hello plain world!',
    //   html: '<p>Hello HTML world!</p>'
    // };

    // sgMail.send(msg).then(() => {
    //   console.log('it worked', msg)
    // }).catch(error => {
    //   console.log(error.toString());
    // })
  }); 
};