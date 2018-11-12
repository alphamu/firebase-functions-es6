# Firebase Functions using ES6+

Sample code for how to create a firebase function using ES6+

### Requirements:

- Node 6.11.5 (Officially requires, unofficially anything newer works).
- [Firebase-tools](https://firebase.google.com/docs/cli/)

### Configure

- Copy .firebaserc-example to .firebaserc and add firebase proiject id to the file.
- Generate a service account file from Firebase and add it to project root. [Link](https://firebase.google.com/docs/admin/setup#add_firebase_to_your_app) 
- Then link it in `./src/functions/admin/index.js`.

### RUN
To setup:

    npm install

To run:

    npm run funcs:serve

If only code has changed and no config has changed:

    npm run funcs:serve-fast
