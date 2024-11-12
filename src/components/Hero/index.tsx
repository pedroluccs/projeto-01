import { HeroBar, SubLogo, Logo } from './styles'
import logoImage from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { ReactNode } from 'react'

interface HeroProps {
  children?: ReactNode
}

const Hero: React.FC<HeroProps> = ({ children }) => {
  return (
    <div>
      {children}
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
