import express from 'express';
import cors from 'cors';
import { testRoutes } from './routes/testRoutes';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use('/api', testRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});