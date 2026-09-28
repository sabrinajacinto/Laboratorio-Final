import express from 'express';

const router = express.Router();

// Busca o TipoExameController
import TipoExameController from '../controllers/TipoExameController.js'

const controle = new TipoExameController();

const caminhobase = 'tipoexame/'

router.get('/' + caminhobase + 'add', controle.openAdd)

router.post('/' + caminhobase + 'add', controle.add)

router.get('/' + caminhobase + 'lst', controle.list)

router.post('/' + caminhobase + 'find', controle.find)

router.get('/' + caminhobase + 'del/:id', controle.del)

router.get('/' + caminhobase + 'edt/:id', controle.openEdt)

router.post('/' + caminhobase + 'edt/:id', controle.edt)

export default router