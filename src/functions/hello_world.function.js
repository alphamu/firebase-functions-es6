import * as functions from 'firebase-functions'

export default (public_app) => {
  public_app.get('/ping', (request, response) => {
    response.status(200).send('OK')
  })
}

const message = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`from async call!`);
    }, 5000);
  });
};

export const basic = functions.https.onRequest(async (req, res) => {
  if (req.method === 'GET') {
    let msg = await message()
    res.status(200).send(msg);
  } else {
    res.status(403).send('Unauthorized');
  }

})