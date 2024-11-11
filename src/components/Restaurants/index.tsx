import {
  CardGrid,
  CardDescription,
  CardTitle,
  CardText,
  CardImg,
  Card,
  CardButton,
  TitleContainer,
  Tag,
  TagContainer,
  Rating
} from './style'

import starIcon from '../../assets/estrela.png'

type CardContent = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: [
    {
      foto: string
      preco: number
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

type CardListProps = {
  restaurants: CardContent[]
}

const CardList = ({ restaurants }: CardListProps) => {
  return (
    <div className="container">
      <CardGrid>
        {restaurants.map((restaurant, index) => (
          <Card key={index}>
            <CardImg>
              <img src={restaurant.capa} alt={restaurant.titulo} />
              <TagContainer>
                <Tag>{restaurant.tipo}</Tag>
              </TagContainer>
            </CardImg>
            <CardText>
              <TitleContainer>
                <CardTitle>{restaurant.titulo}</CardTitle>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Rating>
                    {restaurant.avaliacao}
                    <img src={starIcon} alt="" />
                  </Rating>
                </div>
              </TitleContainer>
              <CardDescription>{restaurant.descricao}</CardDescription>
              <CardButton to={`/profile/${restaurant.id}`}>
                Saiba mais
              </CardButton>
            </CardText>
          </Card>
        ))}
      </CardGrid>
    </div>
  )
}

export default CardList
