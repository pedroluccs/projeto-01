import React, { useEffect } from 'react'
import { CloseButton } from '../Modal/style'
import {
  CartModalOverlay,
  CartItem,
  CartModalContent,
  RemoveButton,
  TotalPrice,
  CartItemList,
  CartText,
  CartModalButton
} from './styles'
import trash from '../../assets/lixeira-de-reciclagem 1.png'
import { useSelector, useDispatch } from 'react-redux'
import { removeItem } from '../CartReducer'
import { RootState } from '../../store'

const CartModal: React.FC<{
  onClose: () => void
  onContinueToDelivery: () => void
}> = ({ onClose, onContinueToDelivery }) => {
  const dispatch = useDispatch()

  const items = useSelector((state: RootState) => state.cart.items)
  const total = items.reduce((acc, item) => acc + item.price, 0).toFixed(2)

  const handleContinueToDelivery = () => {
    onContinueToDelivery
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  const handleRemove = (title: string) => {
    dispatch(removeItem({ title }))
  }

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
                <RemoveButton onClick={() => handleRemove(item.title)}>
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
        <CartModalButton onClick={onContinueToDelivery}>
          Continuar com a entrega
        </CartModalButton>
      </CartModalContent>
    </CartModalOverlay>
  )
}

export default CartModal
