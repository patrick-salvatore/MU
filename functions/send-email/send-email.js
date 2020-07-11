const client = require('@sendgrid/mail');
require('dotenv').config();

async function sendEmail({
  client,
  message,
  senderEmail,
  senderName,
  emailSubject,
}) {
  const data = {
    from: {
      email: senderEmail,
      name: senderName,
    },
    subject: emailSubject,
    to: 'info@friendsofmercyhurstrowing.com',
    html: `Hi, FOMR 
            <br/>Message: ${message} 
            <br/>Sincerely: ${senderName}`,
  };

  try {
    const emailRes = await client.send(data);
    console.log({ emailRes });
    return emailRes;
  } catch (e) {
    return e;
  }
}

exports.handler = async function(event) {
  const { SENDGRID_API_KEY } = process.env;

  try {
    await client.setApiKey(SENDGRID_API_KEY);
    const body = JSON.parse(event.body);

    const { message, senderEmail, senderName, emailSubject } = body;

    const { response, code } = await sendEmail({
      client,
      message,
      senderEmail,
      senderName,
      emailSubject,
    });

    return { statusCode: code, body: response.body };
  } catch (e) {
    return {
      statusCode: 500,
      body: e,
    };
  }
};
