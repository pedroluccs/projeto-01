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
  onClose: () => void
}

const AlertModal: React.FC<AlertModalProps> = ({
  image,
  title,
  description,
  price,
  onClose
}) => {
  return (
    <ModalOverlay>
      <ModalContent>
        <ModalImage src={image} alt={title} />
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <div className="modal">
          <ModalTitle>{title}</ModalTitle>
          <ModalDescription>
            A pizza Margherita é uma pizza clássica da culinária italiana,
            reconhecida por sua simplicidade e sabor inigualável. Ela é feita
            com uma base de massa fina e crocante, coberta com molho de tomate
            fresco, queijo mussarela de alta qualidade, manjericão fresco e
            azeite de oliva extra-virgem. A combinação de sabores é perfeita,
            com o molho de tomate suculento e ligeiramente ácido, o queijo
            derretido e cremoso e as folhas de manjericão frescas, que adicionam
            um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que
            agrada a todos os paladares e é uma ótima opção para qualquer
            ocasião.
            <br />
            <br />
            Serve: de 2 a 3 pessoas
          </ModalDescription>
          <ModalButton>Adicionar ao carrinho - {price}</ModalButton>
        </div>
      </ModalContent>
    </ModalOverlay>
  )
}
export default AlertModal
