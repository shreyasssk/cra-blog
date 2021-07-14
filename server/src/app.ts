import dotenv from 'dotenv';
import express from 'express';
import 'express-async-errors';
import cookieSession from 'cookie-session';
import cors from 'cors';

import { currentUserRouter } from './routes/auth/current-user';
import { signupRouter } from './routes/auth/signup';
import { signinRouter } from './routes/auth/signin';
import { signoutRouter } from './routes/auth/signout';

import { errorHandler } from './middlewares/error-handler';
import { NotFoundError } from './errors/not-found-error';

dotenv.config();

const app = express();
app.set('trust proxy', true);
app.use(express.json());
app.use(
	cors({
		origin: true,
		allowedHeaders: [
			'Allow-Origin-With-Credentials',
			'Content-Type',
			'Access-Control-Allow-Origin',
		],
		credentials: true,
	})
);
app.use(
	cookieSession({
		signed: false,
	})
);

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.all('*', async () => {
	throw new NotFoundError();
});

app.use(errorHandler);

export { app };
