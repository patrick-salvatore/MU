const helper = require('sendgrid').mail;
require('dotenv').config();

exports.handler = async function(event) {
  const payload = JSON.parse(event.body);

  const fromEmail = new helper.Email('info@friendsofmercyhurstrowing.com');
  const toEmail = new helper.Email('info@friendsofmercyhurstrowing.com');
  const subject = payload.emailSubject || 'Contact From Submission';

  const date = new Date();
  const content = `
    Form Submitted at ${date}
    <ul>
      <li>
        name: ${payload.senderName}
      </li>
      <li>
        reply to: ${payload.senderEmail}
      </li>
    </ul>
    --------------------------------
    <p style='font-size:24px'>${payload.message}</p>
  `;

  console.log(process.env);

  const mailContent = new helper.Content('text/html', content);
  const mail = new helper.Mail(fromEmail, subject, toEmail, mailContent);
  const sg = require('sendgrid')(process.env.SENDGRID_API_KEY);

  const request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON(),
  });

  return new Promise((res, rej) => {
    sg.API(request, function(error, response) {
      if (error) {
        // console.log(error.response.body);
        rej({
          statusCode: 500,
          body: {
            message:
              'Oops, something went wrong! Please contact us directly at info@friendsofmercyhurstrowing.com',
            error,
          },
        });
      }
      // console.log(response.body);
      res({
        statusCode: 500,
        body: {
          message: 'Thank you! Your email has been delivered',
          response,
        },
      });
    });
  });

  // return {
  //   statusCode: 200,
  //   body: 'yuck',
  // };
};
