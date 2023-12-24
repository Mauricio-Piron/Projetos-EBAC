import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Botao } from '../../components/Contato/styles'

export const Form = styled.form`
  max-widht: 540px;
  width: 50vh;
  font-weight: bold;
  font-size: 14;
  color: ${variaveis.cinza};
`

export const Opcoes = styled.div`
  margin-bottom: 16px;
  margin-top: 16px;
  margin-left: 8px;

  label {
    margin-right: 6px;
  }
`
export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
  margin-left: 20px;
`
export const Opcao = styled.div`
  display: inline;
  text-transform: capitalize;
`
