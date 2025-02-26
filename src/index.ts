import express from "express";
import routes from "./rotas/rotas";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(routes);

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});