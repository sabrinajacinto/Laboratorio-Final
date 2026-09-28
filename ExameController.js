// importar o Model
import Exame from '../models/Exame.js'

export default class ExameController {

    constructor(caminhoBase = 'exame/') {
        this.caminhoBase = caminhoBase

        // Abrir tela de cadastro
        this.openAdd = async (req, res) => {
            res.render(caminhoBase + "add")
        }

        // Cadastrar exame
        this.add = async (req, res) => {

            await Exame.create({
                data: req.body.data,
                tipoexame: req.body.tipoexame,
                localexame: req.body.localexame,
                usuario: req.body.usuario,
                especialista: req.body.especialista,
                laudo: req.body.laudo,
                arquivo: req.body.arquivo
            })

            res.redirect('/' + caminhoBase + 'lst')
        }

        // Listar exames
        this.list = async (req, res) => {

            const resultado = await Exame.find({})

            res.render(caminhoBase + 'lst', {
                exames: resultado
            })
        }

        // Pesquisar exame
        this.find = async (req, res) => {

            const filtro = req.body.filtro

            const resultado = await Exame.find({
                tipoexame: {
                    $regex: filtro,
                    $options: "i"
                }
            })

            res.render(caminhoBase + 'lst', {
                exames: resultado
            })
        }

        // Abrir tela de edição
        this.openEdt = async (req, res) => {

            const id = req.params.id

            const exame = await Exame.findById(id)

            res.render(caminhoBase + "edt", {
                Exame: exame
            })
        }

        // Editar exame
        this.edt = async (req, res) => {

            await Exame.findByIdAndUpdate(
                req.params.id,
                req.body
            )

            res.redirect('/' + caminhoBase + 'lst')
        }

        // Excluir exame
        this.del = async (req, res) => {

            await Exame.findByIdAndDelete(req.params.id)

            res.redirect('/' + caminhoBase + 'lst')
        }
    }
}