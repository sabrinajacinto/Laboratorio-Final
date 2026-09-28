// importar o Model
import Exame from '../models/Exame.js'
import Tipoexame from '../models/TipoExame.js'

export default class ExameController {

    constructor(caminhoBase = 'exame/') {
        this.caminhoBase = caminhoBase

        // Abrir tela de cadastro
        this.openAdd = async (req, res) => {

            const resultado = await Tipoexame.find({})

            res.render(caminhoBase + "add", {
                tipoexames: resultado
            })
        }

        // Cadastrar exame
        this.add = async (req, res) => {

            let arquivoEnviado = null

            if (req.file != null) {
                console.log("arquivo recebido")
                arquivoEnviado = req.file.buffer
            } else {
                console.log("nenhum arquivo recebido")
            }

            let tipo = null

            if (
                req.body.tipoexame != null &&
                req.body.tipoexame != ""
            ) {
                tipo = await Tipoexame.findById(req.body.tipoexame)
            }

            await Exame.create({
                data: req.body.data,
                tipoexame: tipo,
                localexame: req.body.localexame,
                usuario: req.body.usuario,
                especialista: req.body.especialista,
                laudo: req.body.laudo,
                arquivo: arquivoEnviado
            })

            res.redirect('/' + caminhoBase + 'lst')
        }

        // Listar exames
        this.list = async (req, res) => {

            const resultado = await Exame
                .find({})
                .populate('tipoexame')

            res.render(caminhoBase + 'lst', {
                exames: resultado
            })
        }

        // Pesquisar exame
        this.find = async (req, res) => {

            const filtro = req.body.filtro || ""

            // Procura primeiro os tipos de exame
            const tipos = await Tipoexame.find({
                nome: {
                    $regex: filtro,
                    $options: "i"
                }
            })

            // Pega os IDs dos tipos encontrados
            const idsTipos = tipos.map(tipo => tipo._id)

            // Pesquisa nos campos do exame
            const resultado = await Exame
                .find({
                    $or: [
                        {
                            tipoexame: {
                                $in: idsTipos
                            }
                        },
                        {
                            localexame: {
                                $regex: filtro,
                                $options: "i"
                            }
                        },
                        {
                            usuario: {
                                $regex: filtro,
                                $options: "i"
                            }
                        },
                        {
                            especialista: {
                                $regex: filtro,
                                $options: "i"
                            }
                        },
                        {
                            laudo: {
                                $regex: filtro,
                                $options: "i"
                            }
                        }
                    ]
                })
                .populate('tipoexame')

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

            const dados = {
                data: req.body.data,
                localexame: req.body.localexame,
                usuario: req.body.usuario,
                laudo: req.body.laudo,
                especialista: req.body.especialista
            }

            if (
                req.body.tipoexame != null &&
                req.body.tipoexame != ""
            ) {
                dados.tipoexame = await Tipoexame.findById(
                    req.body.tipoexame
                )
            }

            if (req.file) {
                dados.arquivo = req.file.buffer
            }

            await Exame.findByIdAndUpdate(
                req.params.id,
                dados
            )

            res.redirect('/' + caminhoBase + 'lst')
        }

        // Excluir exame
        this.del = async (req, res) => {

            await Exame.findByIdAndDelete(
                req.params.id
            )

            res.redirect('/' + caminhoBase + 'lst')
        }
    }
}