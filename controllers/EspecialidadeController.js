// importar o Model
import Especialidade from '../models/Especialidade.js'

export default class EspecialidadeController {

    constructor(caminhoBase = 'especialidade/') {
        this.caminhoBase = caminhoBase

        // Abrir tela de cadastro
        this.openAdd = async (req, res) => {
            res.render(caminhoBase + "add")
        }

        // Cadastrar especialidade
        this.add = async (req, res) => {

            await Especialidade.create({
                especialidade: req.body.especialidade,
                nomedomedico: req.body.nomedomedico
            })

            res.redirect('/' + caminhoBase + 'lst')
        }

        // Listar especialidades
        this.list = async (req, res) => {

            const resultado = await Especialidade.find({})

            res.render(caminhoBase + 'lst', {
                especialidades: resultado
            })
        }

        // Pesquisar especialidade
        this.find = async (req, res) => {

            const filtro = req.body.filtro

            const resultado = await Especialidade.find({
                especialidade: {
                    $regex: filtro,
                    $options: "i"
                }
            })

            res.render(caminhoBase + 'lst', {
                especialidades: resultado
            })
        }

        // Abrir tela de edição
        this.openEdt = async (req, res) => {

            const id = req.params.id

            const especialidade = await Especialidade.findById(id)

            res.render(caminhoBase + "edt", {
                especialidade: especialidade
            })
        }

        // Editar especialidade
        this.edt = async (req, res) => {

            await Especialidade.findByIdAndUpdate(
                req.params.id,
                req.body
            )

            res.redirect('/' + caminhoBase + 'lst')
        }

        // Excluir especialidade
        this.del = async (req, res) => {

            await Especialidade.findByIdAndDelete(
                req.params.id
            )

            res.redirect('/' + caminhoBase + 'lst')
        }
    }
}
