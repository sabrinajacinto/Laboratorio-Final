import express from 'express';
import multer from 'multer';

const router = express.Router();

const storage = multer.memoryStorage();

const upload = multer({ storage });

import ExameController from '../controllers/ExameController.js'

const controle = new ExameController();

const caminhobase = 'exame/'

router.get('/' + caminhobase + 'add', controle.openAdd)

router.post(
    '/' + caminhobase + 'add',
    upload.single('arquivo'),
    controle.add
)

router.get('/' + caminhobase + 'lst', controle.list)

router.post('/' + caminhobase + 'find', controle.find)

router.get('/' + caminhobase + 'del/:id', controle.del)

router.get('/' + caminhobase + 'edt/:id', controle.openEdt)

router.post(
    '/' + caminhobase + 'edt/:id',
    upload.single('arquivo'),
    controle.edt
)

export default router