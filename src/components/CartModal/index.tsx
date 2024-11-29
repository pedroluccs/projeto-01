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
  const total = items.reduce((acc, item) => acc + item.preco, 0).toFixed(2)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  const handleRemove = (nome: string) => {
    dispatch(removeItem({ nome }))
  }

  return (
    <CartModalOverlay>
      <CartModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <CartText>
          <CartItemList>
            {items.map((item, index) => (
              <CartItem key={index}>
                <img src={item.foto} alt={item.nome} />
                <div className="container">
                  <h3>{item.nome}</h3>
                  <p>R$ {item.preco.toFixed(2)}</p>
                </div>
                <RemoveButton onClick={() => handleRemove(item.nome)}>
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
        <CartModalButton
          onClick={onContinueToDelivery}
          disabled={items.length === 0}
        >
          Continuar com a entrega
        </CartModalButton>
      </CartModalContent>
    </CartModalOverlay>
  )
}

export default CartModal
