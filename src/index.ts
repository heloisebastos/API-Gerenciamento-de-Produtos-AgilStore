import express from 'express';
import productRoutes from './interface/routes/ProductRoutes';
import jsonErrorMiddleware from './interface/utils/jsonErrorMiddleware'

const app = express();

app.use(express.json());
app.use(jsonErrorMiddleware);

app.use('/agilstore', productRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
