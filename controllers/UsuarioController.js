// importar o Model
import Usuario from '../models/Usuario.js'

export default class UsuarioController {

    constructor(caminhoBase = 'usuario/') {
        this.caminhoBase = caminhoBase

        // Abrir tela de cadastro
        this.openAdd = async (req, res) => {
            res.render(caminhoBase + "add")
        }

        // Cadastrar usuário
        this.add = async (req, res) => {

            await Usuario.create({
                nome: req.body.nome,
                email: req.body.email,
                senha: req.body.senha,
                telefone: req.body.telefone,
                dataNascimento: req.body.dataNascimento,
                algumacirurgia: req.body.algumacirurgia,
                cpf: req.body.cpf
            })

            res.redirect('/' + caminhoBase + 'lst')
        }

        // Listar usuários
        this.list = async (req, res) => {

            const resultado = await Usuario.find({})

            res.render(caminhoBase + 'lst', {
                usuarios: resultado
            })
        }

        // Abrir tela de edição
        this.openEdt = async (req, res) => {

            const id = req.params.id

            const usuario = await Usuario.findById(id)

            res.render(caminhoBase + "edt", {
                usuario: usuario
            })
        }

        // Editar usuário
        this.edt = async (req, res) => {

            await Usuario.findByIdAndUpdate(
                req.params.id,
                req.body
            )

            res.redirect('/' + caminhoBase + 'lst')
        }

        // Excluir usuário
        this.del = async (req, res) => {

            await Usuario.findByIdAndDelete(req.params.id)

            res.redirect('/' + caminhoBase + 'lst')
        }
    }
}
