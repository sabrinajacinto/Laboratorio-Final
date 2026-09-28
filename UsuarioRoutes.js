import express from 'express';
const router = express.Router();
//Busca o AlunoController
import UsuarioController from '../controllers/UsuarioController.js'
const controle = new UsuarioController();

const caminhobase = 'usuario/'

router.get('/' + caminhobase + 'add', controle.openAdd)
router.post('/' + caminhobase + 'add', controle.add)
router.get('/' + caminhobase + 'lst', controle.list)
export default router