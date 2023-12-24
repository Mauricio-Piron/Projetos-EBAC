import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagramLogo.png'
import facebook from '../../assets/images/facebookLogo.png'
import twitter from '../../assets/images/twitterLogo.png'
import * as S from './styles'

const Footer = () => (
  <S.FooterSection>
    <img src={logo} alt="Efood Ebac " />
    <S.Links>
      <S.LinkItem>
        <S.SocialLink href="https://www.instagram.com/" target="_blank">
          <img src={instagram} alt="Instagram" />
        </S.SocialLink>
      </S.LinkItem>
      <S.LinkItem>
        <S.SocialLink href="https://www.facebook.com/" target="_blank">
          <img src={facebook} alt="Facebook" />
        </S.SocialLink>
      </S.LinkItem>
      <S.LinkItem>
        <S.SocialLink href="https://twitter.com/" target="_blank">
          <img src={twitter} alt="Twitter" />
        </S.SocialLink>
      </S.LinkItem>
    </S.Links>
    <S.Description>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </S.Description>
  </S.FooterSection>
)

export default Footer
