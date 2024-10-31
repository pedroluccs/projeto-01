import {
  BackgroundImg,
  Body,
  ProfileHeroBar,
  RestaurantTag,
  RestaurantName
} from './styles'
import logoImage from '../../assets/logo.png'
import { NavLinkHero } from './styles'

const HeroProfile = () => (
  <>
    <div className="header">
      <Body>
        <ProfileHeroBar>
          <NavLinkHero to="/">Restaurantes</NavLinkHero>
          <NavLinkHero to="/">
            <img src={logoImage} alt="" />
          </NavLinkHero>
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
