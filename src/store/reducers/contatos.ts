import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contatos from '../../models/contato'
import * as enums from '../../utils/enums/Contato'

type ContatosState = {
  itens: Contatos[]
}

const initialState: ContatosState = {
  itens: [
    {
      nome: 'Maria',
      telefone: '31971702670',
      email: 'contato.mauricio@gmail.com',
      social: enums.Social.AMIGOS,
      tipoTel: enums.TipoTel.FIXO,
      id: 1
    },
    {
      id: 2,
      nome: 'Joao Paulo',
      social: enums.Social.AMIGOS,
      tipoTel: enums.TipoTel.CELULAR,
      telefone: '31971702670',
      email: 'contatos.mauricio@gmail.com'
    },
    {
      id: 3,
      nome: 'Marcio Paulo',

      social: enums.Social.FAMILIA,
      tipoTel: enums.TipoTel.CELULAR,
      telefone: '31971702670',
      email: 'contatos.mauricio@gmail.com'
    },
    {
      id: 4,
      nome: 'Aparecida',
      social: enums.Social.FAMILIA,
      tipoTel: enums.TipoTel.CELULAR,
      telefone: '31971702670',
      email: 'contatosSlice.mauricio@gmail.com'
    },
    {
      id: 5,
      nome: 'Mailka',
      social: enums.Social.FAMILIA,
      tipoTel: enums.TipoTel.CELULAR,
      telefone: '31971702670',
      email: 'contatos.mauricio@gmail.com'
    }
  ]
}
const contatosSlice = createSlice({
  name: 'contatos',
  initialState: initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((nome) => nome.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Contatos>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id !== action.payload.id
      )
      if (indexDoContato >= 0) state.itens[indexDoContato] = action.payload
      //contatoParaEditar = action.payload
    },
    cadastrar: (state, action: PayloadAction<Omit<Contatos, 'id'>>) => {
      const contatoJaExiste = state.itens.find(
        (contatos) =>
          contatos.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )
      if (contatoJaExiste) {
        alert('Contato já cadastrado.')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]
        const newcontato = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(newcontato)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions

export default contatosSlice.reducer
