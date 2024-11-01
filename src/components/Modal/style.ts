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
  width: 100%;
  gap: 18px;
  position: relative;
  display: flex;
`

export const ModalImage = styled.img`
  width: 100%px;
  height: 280px;
  object-fit: cover;
  overflow: hidden;
  display: flex;
`

export const ModalTitle = styled.h2`
  font-size: 18px;
  font-wight: 900;
  color: ${colors.white};
  margin-bottom: 18px;
`

export const ModalDescription = styled.p`
  color: ${colors.white};
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 18px;
`

export const ModalButton = styled.button`
  background-color: ${colors.white};
  color: ${colors.red};
  padding: 5px 5px;
  border: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 14px;
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
