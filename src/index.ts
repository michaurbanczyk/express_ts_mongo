// Required External Modules

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import * as dotenv from 'dotenv';

import validateEnv from '@/utils/validateEnv';
import general from '@/routers/routes';

// App Variables
dotenv.config();
validateEnv();
const port = process.env.PORT;

// App Configuration
const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/', general);

// Server Activation
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
