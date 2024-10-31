import logoImage from '../../assets/logo.png'
import { Link, NavLink } from 'react-router-dom'
import { Logo } from '../Hero/styles'
import {
  BackgroundImg,
  Body,
  ProfileHeroBar,
  RestaurantTag,
  RestaurantName
} from './styles'
import { NavLinkHero } from './styles'

const HeroProfile = () => (
  <>
    <div className="header">
      <Body>
        <ProfileHeroBar>
          <NavLinkHero to="/">Restaurantes</NavLinkHero>
          <Link to="/">
            <Logo src={logoImage} />
          </Link>
          <NavLinkHero to="#">0 produto(s) no carrinho</NavLinkHero>
        </ProfileHeroBar>
        <BackgroundImg>
          <RestaurantTag>Italiana</RestaurantTag>
          <RestaurantName>La Dolce Vita Trattoria</RestaurantName>
        </BackgroundImg>
      </Body>
    </div>
  </>
)

export default HeroProfile
