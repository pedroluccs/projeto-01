import React, { useEffect } from 'react'
import { CloseButton, ModalButton } from '../Modal/style'
import {
  CartModalOverlay,
  CartItem,
  CartModalContent,
  RemoveButton,
  TotalPrice,
  CartItemList,
  CartText
} from './styles'
import trash from '../../assets/lixeira-de-reciclagem 1.png'

type CartModalProps = {
  items: { title: string; price: number; image: string }[]
  total: string
  onRemove: (title: string) => void
  onClose: () => void
  onContinueToDelivery: () => void
}

const CartModal: React.FC<CartModalProps> = ({
  items,
  total,
  onRemove,
  onClose,
  onContinueToDelivery
}) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <CartModalOverlay>
      <CartModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <CartText>
          <CartItemList>
            {items.map((item, index) => (
              <CartItem key={index}>
                <img src={item.image} alt={item.title} />
                <div className="container">
                  <h3>{item.title}</h3>
                  <p>R$ {item.price.toFixed(2)}</p>
                </div>
                <RemoveButton onClick={() => onRemove(item.title)}>
                  <img src={trash} alt="lixo" />
                </RemoveButton>
              </CartItem>
            ))}
          </CartItemList>
        </CartText>
        <TotalPrice>
          <span>Valor Total</span>
          <span> R$ {total}</span>
        </TotalPrice>
        <ModalButton onClick={onContinueToDelivery}>
          Continuar com a entrega
        </ModalButton>
      </CartModalContent>
    </CartModalOverlay>
  )
}

export default CartModal
