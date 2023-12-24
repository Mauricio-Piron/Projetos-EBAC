import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { BotaoSalvar } from '../../components/Contato/styles'
import { MainContainer, Titulo } from '../../styles'
import { Nome, Telefone, Email } from '../../styles'
import { Form, Opcoes, Opcao } from './style'

import * as enums from '../../utils/enums/Contato'
import { cadastrar } from '../../store/reducers/contatos'

const Formulario = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [nome, setNome] = useState('')
  const [telefone, settelefone] = useState('')
  const [email, setemail] = useState('')

  const [social, setSocial] = useState(enums.Social.FAMILIA)
  const [tipoTel, setTipoTel] = useState(enums.TipoTel.CELULAR)

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        nome,
        telefone,
        email,
        social,
        tipoTel
      })
    )
    navigate('/')
  }
  return (
    <MainContainer>
      <Titulo>Novo Contato</Titulo>
      <Form onSubmit={cadastrarContato}>
        <Nome
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          type="text"
          placeholder="Nome"
        />
        <Telefone
          value={telefone}
          onChange={(evento) => settelefone(evento.target.value)}
          type="tel"
          placeholder="Telefone"
        />
        <Email
          value={email}
          onChange={(evento) => setemail(evento.target.value)}
          type="mail"
          placeholder="e-mail"
        />
        <Opcoes>
          <p>Social</p>
          {Object.values(enums.Social).map((social) => (
            <Opcao key={social}>
              <input
                value={social}
                name="socail"
                type="radio"
                onChange={(evento) =>
                  setSocial(evento.target.value as enums.Social)
                }
                id={social}
                defaultChecked={social === enums.Social.AMIGOS}
              />{' '}
              <label htmlFor={social}>{social}</label>
            </Opcao>
          ))}
        </Opcoes>
        <Opcoes>
          <p>Tipo Tel</p>
          {Object.values(enums.TipoTel).map((tipoTel) => (
            <Opcao key={tipoTel}>
              <input
                value={tipoTel}
                name="tipoTel"
                type="radio"
                onChange={(evento) =>
                  setTipoTel(evento.target.value as enums.TipoTel)
                }
                id={tipoTel}
                defaultChecked={tipoTel === enums.TipoTel.CELULAR}
              />{' '}
              <label htmlFor={tipoTel}>{tipoTel}</label>
            </Opcao>
          ))}
        </Opcoes>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}
export default Formulario
