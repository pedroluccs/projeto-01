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

const FoodCardContent = [
  {
    image: pizza,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    image: pizza,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    image: pizza,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    image: pizza,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    image: pizza,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    image: pizza,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  }
]

const FoodCardList = () => {
  const [showModal, setShowModal] = useState(false)
  const [selectedCard, setSelectedCard] = useState<
    null | (typeof FoodCardContent)[0]
  >(null)

  const handleOpenModal = (card: (typeof FoodCardContent)[0]) => {
    setSelectedCard(card)
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setSelectedCard(null)
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
              <CardButton onClick={() => handleOpenModal(card)}>
                Adicionar ao carrinho
              </CardButton>
            </CardText>
          </Card>
        ))}
      </CardGrid>
      {showModal && selectedCard && (
        <AlertModal
          image={selectedCard.image}
          title={selectedCard.title}
          description={selectedCard.description}
          price="R$ 60,00"
          onClose={handleCloseModal}
        />
      )}
    </div>
  )
}

export default FoodCardList
