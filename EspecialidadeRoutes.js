import express from 'express';
const router = express.Router();
//Busca o AlunoController
import EspecialidadeController from '../controllers/EspecialidadeController.js'
const controle = new EspecialidadeController();

const caminhobase = 'especialidade/'

router.get('/' + caminhobase + 'add', controle.openAdd)
router.post('/' + caminhobase + 'add', controle.add)
router.get('/' + caminhobase + 'lst', controle.list)
router.post('/' + caminhobase + 'lst', controle.find)
router.get('/' + caminhobase + 'del/:id', controle.del)
router.get('/' + caminhobase + 'edt/:id', controle.openEdt)
router.post('/' + caminhobase + 'edt/:id', controle.edt)
export default router