import 'reflect-metadata';
import app from './app';
import { port } from './config/config';

app
  .listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
  })
  .on('error', (error) => console.error('Error ocurred'));
