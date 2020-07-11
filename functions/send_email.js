import client from '@sendgrid/client';

function addSendgridRecipient(client, email) {
  return new Promise((fulfill, reject) => {
    const data = [
      {
        email: email,
      },
    ];
    const request = {
      method: 'POST',
      url: '/v3/contactdb/recipients',
      body: data,
    };

    client
      .request(request)
      .then(([response, body]) => {
        console.log(response.statusCode);
        console.log(body);
        fulfill(response);
        // cb(null, response);
      })
      .catch(error => reject(error));
  });
}

function sendEmail(client, email, senderEmail, senderName, templateID) {
  return new Promise((resolve, reject) => {
    const data = {
      from: {
        email: senderEmail,
        name: senderName,
      },
      replyTo: {
        email: senderEmail,
      },
      personalizations: [
        {
          to: [
            {
              email: email,
            },
          ],
        },
      ],
      templateId: templateID,
    };

    const request = {
      method: 'POST',
      url: '/v3/mail/send',
      body: data,
    };

    client
      .request(request)
      .then(([response, body]) => {
        console.log(response.statusCode);
        console.log(body);
        resolve(response);
      })
      .catch(error => reject(error));
  });
}

exports.handler = function(event, context, callback) {
  const {
    SENDGRID_API_KEY,
    // eslint-disable-next-line no-undef
  } = process.env;
  const body = JSON.parse(event.body);
  const { email } = body;

  client.setApiKey(SENDGRID_API_KEY);
  addSendgridRecipient(client, email)
    .then(() => {
      sendEmail(client, email)
        .then(response =>
          callback(null, {
            statusCode: response.statusCode,
            body: email + ' added',
          })
        )
        .catch(err => callback(err, null));
      // callback(null, { statusCode: response.statusCode, body: 'test' });
    })
    .catch(err => callback(err, null));
};
