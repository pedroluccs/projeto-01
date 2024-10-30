import { HeroBar, SubLogo, Logo } from './styles'
import logoImage from '../../assets/logo.png'

const Hero = () => (
  <HeroBar>
    <Logo src={logoImage} />
    <SubLogo>
      Viva experiências gastronômicas <br />
      no conforto da sua casa
    </SubLogo>
  </HeroBar>
)

export default Hero
