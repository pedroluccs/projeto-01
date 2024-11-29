import React, { useState } from 'react'
import {
  CardGrid,
  CardDescription,
  CardTitle,
  CardText,
  CardImg,
  Card,
  CardButton,
  TitleContainer
} from './style'

import AlertModal from '../../Modal'
import CartModal from '../../CartModal'
import AddressModal from '../../AddressModal'
import PaymentModal from '../../PaymentModal'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../../CartReducer'
import { RootState } from '../../../store'
import DoneOrderModal from '../../DoneOrderModal'
import { clearCart } from '../../CartReducer'

export type FoodCardItem = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

interface FoodCardListProps {
  menuData: FoodCardItem[]
}

const FoodCardList: React.FC<FoodCardListProps> = ({ menuData }) => {
  const dispatch = useDispatch()
  const cartItens = useSelector((state: RootState) => state.cart.items)

  const [showAlertModal, setShowAlertModal] = useState(false)
  const [showCartModal, setShowCartModal] = useState(false)
  const [showAddressModal, setShowAddressModal] = useState(false)
  const [showPaymentModal, setShowPaymentModal] = useState(false)
  const [showDoneOrderModal, setShowDoneOrderModal] = useState(false)
  const [selectedItem, setSelectedItem] = React.useState<FoodCardItem | null>(
    null
  )

  const [addressInfo, setAddressInfo] = useState({
    receiver: '',
    address: {
      description: '',
      city: '',
      zipCode: '',
      number: 0,
      complement: ''
    }
  })

  const [paymentInfo, setPaymentInfo] = useState({
    card: {
      name: '',
      number: '',
      code: 0,
      expires: {
        month: 0,
        year: 0
      }
    }
  })

  const handleAlertModal = (item: FoodCardItem) => {
    setSelectedItem(item)
    setShowAlertModal(true)
  }

  const handleCloseAlertModal = () => {
    setShowAlertModal(false)
    setSelectedItem(null)
  }

  const handleAddToCart = () => {
    if (selectedItem) {
      dispatch(addItem(selectedItem))
      setShowCartModal(true)
      handleCloseAlertModal()
    }
  }

  const calculateTotal = () => {
    return cartItens.reduce((total, item) => total + item.preco, 0).toFixed(2)
  }

  const handleContinueToDelivery = () => {
    setShowCartModal(false)
    setShowAddressModal(true)
  }

  const handleBackToCart = () => {
    setShowAddressModal(false)
    setShowCartModal(true)
  }

  const handleContinueToPayment = (addressData: typeof addressInfo) => {
    setAddressInfo(addressData)
    setShowAddressModal(false)
    setShowPaymentModal(true)
  }
  const handleBackToAddress = () => {
    setShowPaymentModal(false)
    setShowAddressModal(true)
  }

  const handleFinishPayment = (paymentData: typeof paymentInfo) => {
    setPaymentInfo(paymentData)
    setShowPaymentModal(false)
    setShowDoneOrderModal(true)
  }

  const handleDoneOrder = () => {
    setShowDoneOrderModal(false)
    dispatch(clearCart())
  }

  return (
    <div className="container">
      <CardGrid>
        {menuData.map((item) => (
          <Card key={item.id}>
            <CardImg>
              <img src={item.foto} alt={item.nome} />
            </CardImg>
            <CardText>
              <TitleContainer>
                <CardTitle>{item.nome}</CardTitle>
              </TitleContainer>
              <CardDescription>{item.descricao}</CardDescription>
              <CardButton onClick={() => handleAlertModal(item)}>
                Adicionar ao carrinho
              </CardButton>
            </CardText>
          </Card>
        ))}
      </CardGrid>

      {showAlertModal && selectedItem && (
        <AlertModal
          image={selectedItem.foto}
          title={selectedItem.nome}
          description={selectedItem.descricao}
          price={`R$ ${selectedItem.preco.toFixed(2)}`}
          portion={selectedItem.porcao}
          onClose={handleCloseAlertModal}
          onAddToCart={handleAddToCart}
        />
      )}
      {showCartModal && (
        <CartModal
          onClose={() => setShowCartModal(false)}
          onContinueToDelivery={handleContinueToDelivery}
        />
      )}
      {showAddressModal && (
        <AddressModal
          onClose={() => setShowAddressModal(false)}
          onBackToCart={handleBackToCart}
          onContinueToPayment={handleContinueToPayment}
        />
      )}
      {showPaymentModal && (
        <PaymentModal
          total={calculateTotal()}
          onClose={() => setShowPaymentModal(false)}
          onBackToAddress={handleBackToAddress}
          onFinishPayment={handleFinishPayment}
        />
      )}
      {showDoneOrderModal && (
        <DoneOrderModal
          onClose={() => setShowDoneOrderModal(false)}
          onDoneOrder={handleDoneOrder}
        />
      )}
    </div>
  )
}

export default FoodCardList
