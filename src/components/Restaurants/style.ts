import styled from 'styled-components'
import { colors } from '../../styles'
import { Link } from 'react-router-dom'

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    margin: 0px 0px 0px -20px;
    padding: 0;
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${colors.red};
  width: 472px;
  height: 408px;
  margin: 15px;

  @media (max-width: 1024px) {
    width: 96.2%;
    height: 406px;
  }
`

export const CardImg = styled.div`
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const Tag = styled.div`
  top: 10px;
  right: 10px;
  background-color: ${colors.red};
  color: ${colors.white};
  padding: 4px 8px;
  font-size: 0.8rem;
  border-radius: 4px;
`

export const TagContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  gap: 4px;
`

export const CardText = styled.div`
  padding: 1px;
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 0px 12px;
`

export const CardTitle = styled.h3`
  font-size: 18px;
  padding: 8px;
`

export const Rating = styled.span`
  font-size: 18px;
  font-weight: bold;

  img {
    width: 20px;
    height: 20px;
    margin-left: 8px;
  }
`

export const CardDescription = styled.p`
  font-size: 14px;
  padding: 8px 8px 16px;
`
export const CardButton = styled(Link)`
  display: inline-block;
  background-color: #e66767;
  color: white;
  padding: 4px 8px;
  text-decoration: none;
  margin: 8px;
  font-size: 14px;
`
