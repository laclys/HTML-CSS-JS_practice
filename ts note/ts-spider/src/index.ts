import express, { Request, Response, NextFunction } from 'express';
import cookieSession from 'cookie-session';
import bodyParser from 'body-parser';
import router from './router';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  cookieSession({
    name: 'session',
    keys: ['lll'],
    maxAge: 24 * 60 * 60 * 1000
  })
);
app.use(router);

app.listen(7001, () => [console.log('server is running')]);
