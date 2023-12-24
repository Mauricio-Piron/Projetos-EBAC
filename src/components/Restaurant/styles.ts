import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

import { Link } from 'react-router-dom'
import { ButtonContainer } from '../Button/styles'
import { TagContainer } from '../Tags/styles'

export const CardContainer = styled(Link)`
  width: 472px;
  height: 398px;
  background-color: ${cores.branco};
  color: ${cores.rosa};
  position: relative;
  border: 1px solid ${cores.rosa};
  border-top: transparent;
  position: relative;

  img:first-child {
    position: absolute;
    object-fit: cover;
    width: 472px;
    height: 217px;
    left: -1px;
    top: 0px;
  }

  @media (max-width: ${breakpoints.desktop}) {
    width: 310px;
    height: 436px;

    img:first-child {
      width: 310px;
    }
  }
`

export const DestaqueContainer = styled.div`
  display: flex;
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 1;
  height: 26px;
  font-size: 12px;
  text-align: center;
  gap: 8px;

  ${TagContainer} {
    &:first-child {
      min-width: 121px;
    }

    &:last-child {
      min-width: 61px;
    }
  }
`
export const InfoContainer = styled.div`
  padding-right: 8px;
  border-top: transparent;
  position: absolute;
  height: calc(181px - 16px);

  @media (max-width: ${breakpoints.tablet}) {
    height: calc(220px - 16px);
  }

  @media (max-width: ${breakpoints.desktop}) {
    height: calc(220px - 16px);
  }

  left: 8px;
  bottom: 8px;

  ${ButtonContainer} {
    background-color: ${cores.rosa};
    color: ${cores.rosaClaro};
    padding: 4px 6px;
    display: inline-block;


    @media (max-width: ${breakpoints.tablet}) {
      padding: 4px 6px;
    }
  `

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${breakpoints.tablet}) {
    margint-top: 20px;
  }
`

export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin: 16px 0;
`
export const NoteContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  gap: 8px;
`
