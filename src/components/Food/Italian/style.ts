import styled from 'styled-components'
import { colors } from '../../../styles'

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
  gap: 40px;
  margin: 220px 100px 100px 0px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    margin: 0px 0px 0px -20px;
    padding-top: 80px;
    background-color: ${colors.beige};
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 8px solid ${colors.red};
  background-color: ${colors.red};
  width: 320px;
  height: 390px;
  border-radius: 4px;

  @media (max-width: 1024px) {
    width: 100%;
    height: 350px;
  }
`

export const CardImg = styled.div`
  position: relative;
  object-fit: cover;
  overflow: hidden;

  img {
    width: 304px;
    height: 100%;
    object-fit: fit;

    @media (max-width: 1024px) {
      width: 105%;
      padding-left: 2px;
      object-fit: contain;
    }
  }
`

export const CardText = styled.div`
  padding: 1px;
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;

  @media (max-width: 1024px) {
    padding: 8px;
  }
`

export const CardTitle = styled.h3`
  font-size: 16px;
  padding: 0px 0 1px;
  color: ${colors.beige};

  @media (max-width: 1024px) {
    width: 90%;
    margin-left: 20px;
  }
`

export const CardDescription = styled.p`
  font-size: 14px;
  padding: 10px 0px 10px;
  color: ${colors.beige};
  line-height: 22px;
  font-weight: 400;

  @media (max-width: 1024px) {
    width: 90%;
    margin-left: 25px;
  }
`
export const CardButton = styled.button`
  font-size: 14px;
  font-weight: bold;
  display: inline-block;
  background-color: ${colors.beige};
  color: ${colors.red};
  padding: 4px 8px;
  text-align: center;
  width: 100%;
  border-color: ${colors.red};
  border-radius: 4px;

  @media (max-width: 1024px) {
    width: 200px;
    margin-left: 100px;
  }
`
