import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors'
const public_app = express();
const auth_app = express();

const corsOptions = {
  origin: '*',
  allowedHeaders: ['Content-Type', 'Authorization', 'Content-Length', 'X-Requested-With', 'Accept'],
  methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

public_app.use(cors(corsOptions));
public_app.use(cookieParser());
public_app.get('/ping', (request, response) => {
  response.type('json');
  response.send('{"hello" : "Auth"}');
});

auth_app.use(cors(corsOptions));
auth_app.use(cookieParser());
auth_app.use(validateFirebaseIdToken);

export {
  public_app,
  auth_app
}