import express from 'express';
import '@babel/polyfill';
import router from './routes/routes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', router);

/**
 * App routes
 */
app.get('/', (req, res) => res.status(200).json({
  status: 200,
  message: 'Welcome to Reflections!',
}));
app.all('*', (req, res) => res.status(404).json({
  status: 404,
  message: 'Wrong endpoint. Endpoint does not exist',
}));

app.listen(PORT, () => console.log(`Server running at ${PORT}`));

export default app;
