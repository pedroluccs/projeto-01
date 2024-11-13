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

interface HeroProfileProps {
  tipo: string
  titulo: string
}

const HeroProfile: React.FC<HeroProfileProps> = ({ tipo, titulo }) => {
  const totalQuantity = useSelector(
    (state: RootState) => state.cart.totalQuantity
  )
  const tipoFormatted = tipo.charAt(0).toUpperCase() + tipo.slice(1)
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
            <p>{tipoFormatted}</p>
          </RestaurantTag>
          <RestaurantName>
            <p>{titulo}</p>
          </RestaurantName>
        </div>
      </BackgroundImg>
    </div>
  )
}

export default HeroProfile
