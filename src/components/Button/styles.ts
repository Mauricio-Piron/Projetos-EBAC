import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

export const ButtonContainer = styled.a`
  width: 82px;
  height: 24px;
  background-color: ${cores.rosaClaro};
  color: ${cores.rosa};
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  border: none;

  cursor: pointer;
`

export const ButtonLink = styled(Link)`
  width: 82px;
  height: 24px;
  display: block;
  background-color: ${cores.rosa};
  color: ${cores.rosaClaro};
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  padding: 4px 6px;
  border: none;
  cursor: pointer;
`
