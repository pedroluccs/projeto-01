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

import pizza from '../../../assets/modal-picture.png'
import AlertModal from '../../Modal'
import CartModal from '../../CartModal'
import AddressModal from '../../AddressModal'

type FoodCardItem = {
  image: string
  title: string
  description: string
  price: number
}

const FoodCardContent: FoodCardItem[] = [
  {
    image: pizza,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    price: 60.0
  },
  {
    image: pizza,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    price: 60.0
  },
  {
    image: pizza,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    price: 60.0
  },
  {
    image: pizza,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    price: 60.0
  },
  {
    image: pizza,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    price: 60.0
  },
  {
    image: pizza,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    price: 60.0
  }
]

const FoodCardList = () => {
  const [showAlertModal, setShowAlertModal] = useState(false)
  const [showCartModal, setShowCartModal] = useState(false)
  const [showAddressModal, setShowAddressModal] = useState(false)
  const [selectedCard, setSelectedCard] = useState<FoodCardItem | null>(null)
  const [cartItems, setCartItems] = useState<FoodCardItem[]>([])

  const handleAlertModal = (card: FoodCardItem) => {
    setSelectedCard(card)
    setShowAlertModal(true)
  }

  const handleCloseAlertModal = () => {
    setShowAlertModal(false)
    setSelectedCard(null)
  }

  const handleOpenCartModal = () => {
    setShowAlertModal(false)
    setShowCartModal(true)
  }

  const handleCloseCartModal = () => {
    setShowCartModal(false)
  }

  const handleAddToCart = () => {
    if (selectedCard) {
      setCartItems((prevItems) => [...prevItems, selectedCard])
      handleOpenCartModal() // Fecha o AlertModal após adicionar ao carrinho
    }
  }

  const handleRemoveFromCart = (title: string) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.title !== title)
    )
  }

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)
  }
  const handleContinueToDelivery = () => {
    setShowCartModal(false)
    setShowAddressModal(true)
  }

  const handleBackToCart = () => {
    setShowAddressModal(false)
    setShowCartModal(true)
  }

  const handleContinueToPayment = () => {
    setShowAddressModal(false)
  }

  return (
    <div className="container">
      <CardGrid>
        {FoodCardContent.map((card, index) => (
          <Card key={index}>
            <CardImg>
              <img src={card.image} alt={card.title} />
            </CardImg>
            <CardText>
              <TitleContainer>
                <CardTitle>{card.title}</CardTitle>
              </TitleContainer>
              <CardDescription>{card.description}</CardDescription>
              <CardButton onClick={() => handleAlertModal(card)}>
                Adicionar ao carrinho
              </CardButton>
            </CardText>
          </Card>
        ))}
      </CardGrid>
      {showAlertModal && selectedCard && (
        <AlertModal
          image={selectedCard.image}
          title={selectedCard.title}
          description={selectedCard.description}
          price={`R$ ${selectedCard.price.toFixed(2)}`}
          onClose={handleCloseAlertModal}
          onAddToCart={handleAddToCart}
        />
      )}
      {showCartModal && (
        <CartModal
          items={cartItems}
          total={calculateTotal()}
          onRemove={handleRemoveFromCart}
          onClose={handleCloseCartModal}
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
    </div>
  )
}

export default FoodCardList
