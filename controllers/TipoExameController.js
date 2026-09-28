// importar o Model
import TipoExame from '../models/TipoExame.js'

export default class TipoExameController {

    constructor(caminhoBase = 'tipoexame/') {
        this.caminhoBase = caminhoBase

        // Abrir tela de cadastro
        this.openAdd = async (req, res) => {
            res.render(caminhoBase + "add")
        }

        // Cadastrar tipo de exame
        this.add = async (req, res) => {

            await TipoExame.create({
                nome: req.body.nome
            })

            res.redirect('/' + caminhoBase + 'lst')
        }

        // Listar tipos de exame
        this.list = async (req, res) => {

            const resultado = await TipoExame.find({})

            res.render(caminhoBase + 'lst', {
                tipoexames: resultado
            })
        }

        // Pesquisar tipo de exame
        this.find = async (req, res) => {

            const filtro = req.body.filtro

            const resultado = await TipoExame.find({
                nome: {
                    $regex: filtro,
                    $options: "i"
                }
            })

            res.render(caminhoBase + 'lst', {
                tipoexames: resultado
            })
        }

        // Abrir tela de edição
        this.openEdt = async (req, res) => {

            const id = req.params.id

            const tipoexame = await TipoExame.findById(id)

            res.render(caminhoBase + "edt", {
                tipoexame: tipoexame
            })
        }

        // Editar tipo de exame
        this.edt = async (req, res) => {

            await TipoExame.findByIdAndUpdate(
                req.params.id,
                req.body
            )

            res.redirect('/' + caminhoBase + 'lst')
        }

        // Excluir tipo de exame
        this.del = async (req, res) => {

            await TipoExame.findByIdAndDelete(req.params.id)

            res.redirect('/' + caminhoBase + 'lst')
        }
    }
}