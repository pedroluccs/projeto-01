import {
  BackgroundImg,
  ProfileHeroBar,
  RestaurantTag,
  RestaurantName
} from './styles'
import logoImage from '../../assets/logo.png'
import { NavLinkHero } from './styles'

const HeroProfile = () => (
  <>
    <div className="header">
      <ProfileHeroBar>
        <NavLinkHero to="/">
          <p>Restaurantes</p>
        </NavLinkHero>
        <NavLinkHero to="/">
          <img src={logoImage} alt="" />
        </NavLinkHero>
        <NavLinkHero to="#">
          <p>0 produto(s) no carrinho</p>
        </NavLinkHero>
      </ProfileHeroBar>
      <BackgroundImg>
        <RestaurantTag>Italiana</RestaurantTag>
        <RestaurantName>La Dolce Vita Trattoria</RestaurantName>
      </BackgroundImg>
    </div>
  </>
)

export default HeroProfile
