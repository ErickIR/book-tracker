import express, { Request, Response, NextFunction } from 'express';
import mongooseConnect from './data/mongoContext';
import routes from './api/routes';
const app = express();

mongooseConnect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes);

app.get('/health', (req, res) => {
  res.send('The system is up.');
});

export default app;
