import express from 'express';
import bodyParser from 'body-parser';
import productRoutes from './interface/productRoute';

const app = express();
const port = 3333;

app.use(bodyParser.json());
app.use(productRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
