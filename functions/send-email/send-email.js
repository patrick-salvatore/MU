const helper = require('sendgrid').mail;
require('dotenv').config();

exports.handler = async function(event) {
  const payload = JSON.parse(event.body);

  console.log(process.env.SENDGRID_API_KEY);

  const fromEmail = new helper.Email('info@friendsofmercyhurstrowing.com');
  const toEmail = new helper.Email(
    'info@friendsofmercyhurstrowing.com',
    payload.senderName
  );
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

  const mailContent = new helper.Content('text/html', content);
  const mail = new helper.Mail(fromEmail, subject, toEmail, mailContent);
  const sg = require('sendgrid')(process.env.SENDGRID_API_KEY);

  const request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON(),
  });

  return new Promise((res, rej) => {
    sg.API(request, function(error) {
      if (error) {
        console.log(error.response.body);
        rej({
          statusCode: 500,
          body:
            'Oops, something went wrong! Please contact us directly at info@friendsofmercyhurstrowing.com',
        });
      }
      // console.log(response.body);
      res({
        statusCode: 200,
        body: 'Thank you! Your email has been delivered',
      });
    });
  });

  // return {
  //   statusCode: 200,
  //   body: 'yuck',
  // };
};
