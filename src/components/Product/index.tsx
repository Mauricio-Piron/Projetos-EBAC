import { BtnModalContainer, CardContainer, CardTitle } from './styles'
import Tag from '../Tags'
import fechar from '../../assets/images/fechar.png'
import { Modal as ModalStyle, ModalContainer, ModalDescription } from './styles'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'
import { useState } from 'react'
import { Menu } from '../RestaurantList'
import Button from '../Button'
import { parseToBrl } from '../../utils'

type Props = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
  cardapio: Menu
}

export const priceAdjust = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

const ProductCard = ({
  nome,
  descricao,
  foto,
  porcao,
  preco,
  cardapio
}: Props) => {
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)

  const closeModal = () => {
    setIsOpen(false)
  }

  const addToCart = () => {
    dispatch(add(cardapio))
    setIsOpen(false)
    dispatch(open())
  }

  return (
    <>
      <CardContainer>
        <img src={foto} alt="Pizza" />
        <CardTitle>{nome}</CardTitle>
        <p>{descricao}</p>
        <div
          onClick={() => {
            setIsOpen(true)
          }}
        >
          <Tag>Adicionar ao carrinho</Tag>
        </div>
      </CardContainer>

      <ModalStyle className={isOpen ? 'visible' : ''}>
        <ModalContainer className={isOpen ? 'visible' : ''}>
          <div>
            <img src={foto} alt="pizza marguerita" />
          </div>
          <ModalDescription>
            <h3>{nome}</h3>
            <img src={fechar} alt="botão fechar" onClick={closeModal} />
            <div>
              <p>{descricao}</p>
              <p>Serve: {porcao}</p>
            </div>
            <BtnModalContainer>
              <Button
                type={'button'}
                title={'Acionar Carrinho'}
                onClick={addToCart}
              >
                Adicionar ao carrinho
              </Button>
              <span>{parseToBrl(preco)}</span>
            </BtnModalContainer>
          </ModalDescription>
        </ModalContainer>
        <div className={isOpen ? 'overlay' : ''} onClick={closeModal}></div>
      </ModalStyle>
    </>
  )
}

export default ProductCard
