import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import routes from './routes/route.js'; // rotas externas
import EspecialidadeRoutes from './routes/EspecialidadeRoutes.js'; // rotas externas
import ExameRoutes from './routes/ExameRoutes.js'; // rotas externasimport
import UsuarioRoutes from './routes/UsuarioRoutes.js'; // rotas externas
import TipoExameRoutes from './routes/TipoExameRoutes.js'; // rotas externas

const PORT = 3000
const app = express();

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Caminho correto das views e public
const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

// Servir arquivos estáticos
app.use(express.static(join(__dirname, '/public')));
app.set('views', join(__dirname, '/views'));

// Rotas
app.use(EspecialidadeRoutes)
app.use(ExameRoutes)
app.use(UsuarioRoutes)
app.use(routes)
app.use(TipoExameRoutes)
app.listen(PORT, ()=>{
 console.log(
    `Servidor rodando em http://localhost:${PORT}`)
});
// Exporta o handler compatível com Vercel
export default app;