import admin from '../admin'

export default (auth_app) => {
  auth_app.get('/auth/verify', (request, response) => {
    response.type('json');
    response.send('{"hello" : "Auth"}');
  });

  auth_app.get('/ping', (req, res) => {
    res.status(200).send("OK");
  })
}


