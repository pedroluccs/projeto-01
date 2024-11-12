import {
  BackgroundImg,
  HeroProfileBar,
  RestaurantTag,
  RestaurantName,
  NavLinkHeroRight,
  NavLinkHeroLeft
} from './styles'

import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import Hero from '../Hero'

const HeroProfile = () => {
  const totalQuantity = useSelector(
    (state: RootState) => state.cart.totalQuantity
  )

  return (
    <div className="header">
      <HeroProfileBar>
        <Hero />
        <div className="container">
          <NavLinkHeroLeft to="/">
            <p>Restaurantes</p>
          </NavLinkHeroLeft>
          <NavLinkHeroRight to="#">
            {totalQuantity} produto(s) no carrinho
          </NavLinkHeroRight>
        </div>
      </HeroProfileBar>
      <BackgroundImg>
        <div className="container">
          <RestaurantTag>
            <p>Italiana</p>
          </RestaurantTag>
          <RestaurantName>
            <p>La Dolce Vita Trattoria</p>
          </RestaurantName>
        </div>
      </BackgroundImg>
    </div>
  )
}

export default HeroProfile
