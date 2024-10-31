import { Link } from 'react-router-dom'
import styled from 'styled-components'
import backgroundImage from '../../assets/fundo.png'
import backgroundImage2 from '../../assets/fundo-parte-2.png'
import { colors } from '../../styles'

export const ProfileHeroBar = styled.div`
  background-image: url(${backgroundImage});
  display: flex;
  align-items: center;
  text-align: center;
  position: relative;
  justify-content: space-between;
  height: 200px;
  padding: 100px;

  @media (max-width: 1024px) {
    width: 100%;
    height: 100px;
    display: flex;
    padding: 0px;
  }
`
export const NavLinkHero = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  margin: 120px;

  @media (max-width: 1024px) {
    margin: 10px;
  }
`
export const BackgroundImg = styled.div`
  background-image: url(${backgroundImage2});
  background-position: center;
  background-size: cover;
  position: relative;
  display: block;
  width: 100%;
  height: 280px;
  bottom: 20px;

  @media (max-width: 1024px) {
    width: 100%;
    height: 150px;
    bottom: 0px;
  }
`

export const RestaurantTag = styled.div`
  position: absolute;
  top: 10px;
  left: 47vh;

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

export const Body = styled.body`
  margin: 0px 0px 110px;

  @media (max-width: 1024px) {
    margin: 0 auto;
  }
`
export const RestaurantName = styled.div`
  position: absolute;
  bottom: 10px;
  left: 48vh;
  color: white;
  font-size: 32px;
  font-weight: 900;

  @media (max-width: 1024px) {
    font-size: 15px;
    left: 10px;
  }
`
