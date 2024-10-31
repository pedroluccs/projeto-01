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

import pizza from '../../../assets/image3.png'

const FoodCardContent = [
  {
    image: pizza,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    tags: ['Italiana'],
    rating: '4.1',
    link: '/Profile'
  },
  {
    image: pizza,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    tags: ['Italiana'],
    rating: '4.1',
    link: '/Profile'
  },
  {
    image: pizza,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    tags: ['Italiana'],
    rating: '4.1',
    link: '/Profile'
  },
  {
    image: pizza,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    tags: ['Italiana'],
    rating: '4.1',
    link: '/Profile'
  },
  {
    image: pizza,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    tags: ['Italiana'],
    rating: '4.1',
    link: '/Profile'
  },
  {
    image: pizza,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    tags: ['Italiana'],
    rating: '4.1',
    link: '/Profile'
  }
]

const FoodCardList = () => {
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
              <CardButton to={card.link}>Adicionar ao carrinho</CardButton>
            </CardText>
          </Card>
        ))}
      </CardGrid>
    </div>
  )
}

export default FoodCardList
