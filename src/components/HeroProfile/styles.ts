import { Link } from 'react-router-dom'
import styled from 'styled-components'
import backgroundImage from '../../assets/fundo.png'
import backgroundImage2 from '../../assets/fundo-parte-2.png'
import { colors } from '../../styles'

export const ProfileHeroBar = styled.div`
  background-image: url(${backgroundImage});
  display: flex;
  justify-content: space-between;
  position: relative;
  height: 186px;
  max-width: 1366px;
  place-items: center;

  @media (max-width: 1024px) {
    width: 100%;
    height: 160px;
  }
`

export const BackgroundImg = styled.div`
  background-image: url(${backgroundImage2});
  position: relative;
  display: block;
  width: 100%;
  height: 280px;
  max-width: 1366px;
  bottom: 20px;

  @media (max-width: 1024px) {
    width: 100%;
    height: 150px;
  }
`

export const NavLinkHero = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;

  img {
    margin-left: 11.5vh;
  }

  p {
    margin: 150px;
  }

  @media (max-width: 1024px) {
    align-items: center;
    text-align: center;
    display: grid;

    p {
      margin: 10px;
    }

    img {
      margin: 0px;
    }
  }
`

export const RestaurantTag = styled.div`
  position: absolute;
  top: 10px;
  left: 18vh;

  color: ${colors.white};
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 32px;
  font-weight: 100;

  @media (max-width: 1024px) {
    font-size: 15px;
    left: 10px;
  }
`
export const RestaurantName = styled.div`
  position: absolute;
  bottom: 10px;
  left: 19vh;
  color: white;
  font-size: 32px;
  font-weight: 900;

  @media (max-width: 1024px) {
    font-size: 15px;
    left: 10px;
  }
`
