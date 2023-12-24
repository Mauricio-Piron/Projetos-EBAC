import styled, { createGlobalStyle } from 'styled-components'
import { Botao } from '../components/Contato/styles'
import variaveis from './variaveis'

const EstliGlobal = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
}
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const MainContainer = styled.main`
  padding: 0, 40px;
  height: 100vh;
  overflow-y: scroll;
`
export const Titulo = styled.h2`
  display: block;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: bold;
`
export const Nome = styled.input`
  font-size: 18px;
  font-weigh: bold;
  margin-top: 4px;
  line-height: 24px;
  margin-bottom: 6px;
  display: block;
  width: 50vh;
  border-radius: 8px;
  font-weight: bold;
  margin-left: 8px;
  color: ${variaveis.cinza};
  border-color: ${variaveis.cinza};
`
export const Telefone = styled.input`
  color: ${variaveis.cinza3};
  border-color: ${variaveis.cinza};
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 50vh;
  border-radius: 8px;
  margin-left: 8px;
`
export const Email = styled.input`
  color: ${variaveis.cinza3};
  border-color: ${variaveis.cinza};
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  margin-top: 8px;
  display: block;
  width: 50vh;
  border-radius: 8px;
  margin-left: 8px;
`
export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`

export default EstliGlobal
