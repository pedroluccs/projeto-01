import { HeroBar, SubLogo, Logo } from './styles'
import logoImage from '../../assets/logo.png'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div>
      <HeroBar>
        <Link to="/">
          <Logo src={logoImage} />
        </Link>
        <SubLogo>
          Viva experiências gastronômicas <br />
          no conforto da sua casa
        </SubLogo>
      </HeroBar>
    </div>
  )
}

export default Hero
