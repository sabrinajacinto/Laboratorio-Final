import express from 'express';

const router = express.Router();

// Busca o UsuarioController
import UsuarioController from '../controllers/UsuarioController.js'

const controle = new UsuarioController();

const caminhobase = 'usuario/'

// Abrir tela de cadastro
router.get('/' + caminhobase + 'add', controle.openAdd)

// Cadastrar usuário
router.post('/' + caminhobase + 'add', controle.add)

// Listar usuários
router.get('/' + caminhobase + 'lst', controle.list)

// Abrir tela de edição
router.get('/' + caminhobase + 'edt/:id', controle.openEdt)

// Editar usuário
router.post('/' + caminhobase + 'edt/:id', controle.edt)

// Excluir usuário
router.get('/' + caminhobase + 'del/:id', controle.del)

export default router