import conexao from '../config/conexao.js'

const TipoExame = conexao.Schema({
    nome: {
        type: String,
        required: true
    }
})

export default conexao.model('TipoExame', TipoExame)

const Tipoexame = conexao.Schema({
  nome: {
    type: String, 
    required: true
  },
})