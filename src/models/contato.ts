import * as enums from '../utils/enums/Contato'

class Contato {
  nome: string
  telefone: string
  email: string
  social: enums.Social
  tipoTel: enums.TipoTel
  id: number

  constructor(
    nome: string,
    telefone: string,
    email: string,
    social: enums.Social,
    tipoTel: enums.TipoTel,
    id: number
  ) {
    this.nome = nome
    this.telefone = telefone
    this.email = email
    this.social = social
    this.tipoTel = tipoTel
    this.id = id
  }
}

export default Contato
