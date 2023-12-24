import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterSection = styled.footer`
  background-color: ${cores.rosaClaro};
  width:100%
  height: 298px;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin-top: 120px;

  > img {
    width: 125px;
    height: 58px;
  }
`
export const Links = styled.ul`
  padding-top: 32px;
  padding-bottom: 80px;

  .facebook {
    margin-right: 8px;
    margin-left: 8px;
  }
`
export const LinkItem = styled.a`
  width: 88px;
  height: 24px;
  img {
    width: 24px;
    cursor: pointer;
  }
`
export const Description = styled.p`
  width: 480px;
  color: ${cores.rosa};
  font-size: 10px;
  font-weight: 400;
  text-align: center;
  line-weight: 12px;
`
export const SocialLink = styled.a`
  margin-right: 8px;
  text-decoration: none;
`
