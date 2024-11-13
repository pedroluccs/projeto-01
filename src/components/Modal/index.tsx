import React, { useState } from 'react'
import {
  CloseButton,
  ModalButton,
  ModalContent,
  ModalDescription,
  ModalImage,
  ModalOverlay,
  ModalTitle
} from './style'

type AlertModalProps = {
  image: string
  title: string
  description: string
  price: string
  portion: string
  onClose: () => void
  onAddToCart: () => void
}

const AlertModal: React.FC<AlertModalProps> = ({
  image,
  title,
  price,
  description,
  portion,
  onClose,
  onAddToCart
}) => {
  return (
    <>
      <ModalOverlay>
        <ModalContent>
          <ModalImage src={image} alt={title} />
          <CloseButton onClick={onClose}>&times;</CloseButton>
          <div className="modal">
            <ModalTitle>{title}</ModalTitle>
            <ModalDescription>
              {description}
              <br />
              <br />
              Serve: {portion}
            </ModalDescription>
            <ModalButton
              onClick={() => {
                onAddToCart()
              }}
            >
              Adicionar ao carrinho - {price}
            </ModalButton>
          </div>
        </ModalContent>
      </ModalOverlay>
    </>
  )
}
export default AlertModal
