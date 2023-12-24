import * as S from './styles'

import estrela from '../../assets/images/estrela.svg'
import Tag from '../Tags'

import Button from '../Button'

type Props = {
  image?: string
  title: string
  note: number
  description: string
  category: string
  emphasis: boolean
  id: number
}

export const getDescription = (desc: string, count: number) => {
  if (desc.length > count) {
    return desc.slice(0, count - 3) + '...'
  }
}

const Restaurants = ({
  title,
  image,
  note,
  description,
  category,
  emphasis,
  id
}: Props) => {
  return (
    <S.CardContainer to={`restaurants/${id}`}>
      <S.DestaqueContainer>
        {emphasis && <Tag>Destaque da semana</Tag>}
        <Tag>{category}</Tag>
      </S.DestaqueContainer>
      <div>
        <img src={image} alt={title} />
      </div>
      <S.InfoContainer>
        <S.TitleContainer>
          <h3>{title}</h3>
          <S.NoteContainer>
            <p>{note}</p>
            <img src={estrela} />
          </S.NoteContainer>
        </S.TitleContainer>
        <S.Description>{getDescription(description, 240)}</S.Description>
        <Button type={'button'} title={'Saiba Mais'}>
          Saiba mais
        </Button>
      </S.InfoContainer>
    </S.CardContainer>
  )
}

export default Restaurants
