import * as admin from 'firebase-admin';


const serviceAccount = require('../../../cloud-function-test-6f421-firebase-adminsdk-s95fm-4d4601f1ea.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://cloud-function-test-6f421.firebaseio.com"
});

export default admin;