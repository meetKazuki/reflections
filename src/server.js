import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.status(200).send({ message: 'Welcome to Reflections!' }));

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
