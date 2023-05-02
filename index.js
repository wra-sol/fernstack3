import express, {json} from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

import userRoutes from './userRoutes.js';
dotenv.config ();
const app = express ();
const port = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use (cors ());
app.use (json ());
app.use(express.static(path.join(__dirname, './client/dist')));
app.use((req, res, next) => {
  if (req.url.startsWith('/api')) {
  req.url = req.url.substring(4);
}
next();
})
app.use (userRoutes);


app.get('/*', async function (req, res) {
  const homePath = path.join(__dirname,"./client/dist/index.html");
  res.sendFile(homePath);
});


app.use ((error, req, res, next) => {
  res.status (500).json ({error: error.message});
});

app.listen (port, () => console.log (`Express app listening on ${port}`));