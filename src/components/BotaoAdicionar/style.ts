import { Link } from 'react-router-dom'
import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const NovoContato = styled(Link)`
  padding: 8px;
  background-color: ${variaveis.branco};
  border-radius: 14px;
  font-weight: bold;
  color: ${variaveis.cinza};
  border-color: ${variaveis.cinza};
  width: 220%;
  justify-content: center;
  text-align: center;
  margin-top: 50px;
  cursor: pointer;
  text-decoration: none;
`
