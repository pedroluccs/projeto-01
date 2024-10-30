import { Copyright, FooterContainer, SocialIcons } from './styles'
import instagram from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import logoImage from '../../assets/logo.png'
import { Logo } from '../Hero/styles'

const Footer = () => {
  return (
    <FooterContainer>
      <Logo src={logoImage} />
      <SocialIcons>
        <img src={instagram} alt="" />
        <img src={facebook} alt="" />
        <img src={twitter} alt="" />
      </SocialIcons>
      <Copyright>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </Copyright>
    </FooterContainer>
  )
}

export default Footer
