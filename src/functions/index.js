import * as functions from 'firebase-functions'
import {auth_app, public_app} from './config'
import './auth/auth.function'
import helloWorld, {basic} from './hello_world.function'
import authfunc from './auth/auth.function'

// ES5 syntax to import all the function files automatically.
// Does not work in ES6
// const files = glob.sync('./**/*.function.js', {cwd: __dirname})
// for (let f = 0, fl = files.length; f < fl; f++) {
//   const file = files[f]
//   const functionName = file.split('/').pop().slice(0, -12) // Strip off '.function.js'
//   if (!process.env.FUNCTION_NAME || process.env.FUNCTION_NAME === functionName) {
//     exports[functionName] = require(file)
//   }
// }

helloWorld(public_app);
authfunc(auth_app)

const auth = functions.https.onRequest(auth_app);
const pub = functions.https.onRequest(public_app);
export {
  auth,
  pub,
  basic
}