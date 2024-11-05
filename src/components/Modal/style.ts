import styled from 'styled-components'
import { colors } from '../../styles'

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`

export const ModalContent = styled.div`
  background-color: ${colors.red};
  padding: 30px;
  border-radius: 8px;
  max-width: 1024px;
  height: 344px;
  gap: 18px;
  position: relative;
  display: flex;

  @media (max-width: 1024px) {
    max-width: 100%;
    height: 90vh;
    display: grid;
    align-items: center;
  }
`

export const ModalImage = styled.img`
  width: 100%px;
  height: 280px;
  object-fit: cover;
  overflow: hidden;
  display: flex;

  @media (max-width: 1024px) {
    width: 99.8%;
  }
`

export const ModalTitle = styled.h2`
  font-size: 18px;
  font-wight: 900;
  color: ${colors.white};
  margin-bottom: 18px;

  @media (max-width: 1024px) {
    text-align: center;
  }
`

export const ModalDescription = styled.p`
  color: ${colors.white};
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 18px;

  @media (max-width: 1024px) {
    font-size: 12px;
    line-height: 14px;
    text-align: center;
  }
`

export const ModalButton = styled.button`
  background-color: ${colors.beige};
  color: ${colors.red};
  padding: 5px 5px;
  border: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 14px;

  @media (max-width: 1024px) {
    margin-left: 52px;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 1px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 2em;
  cursor: pointer;
  color: ${colors.white};
`
