import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { MoonLoader } from 'react-spinners'

import { Loading } from '../RestaurantList/styles'
import logo from '../../assets/images/logo.svg'
import { open } from '../../store/reducers/cart'
import { useGetRestaurantQuery } from '../../services/api'
import { RootReducer } from '../../store'
import { Logo, cores } from '../../styles'
import * as S from './styles'

const Hero = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { data: restaurant } = useGetRestaurantQuery(id!)
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  if (!restaurant) {
    return (
      <Loading>
        <MoonLoader color={cores.rosa} size={'60px'} />
      </Loading>
    )
  }
  return (
    <>
      <S.HeroHeaderContainer>
        <S.TextContainer>
          <Link to="/">
            <p>Restaurantes</p>
          </Link>
          <Link to="/">
            <Logo src={logo} alt="logo" />
          </Link>
          <S.CartButton onClick={openCart}>
            {items.length} produto(s) no carrinho
          </S.CartButton>
        </S.TextContainer>
      </S.HeroHeaderContainer>
      <S.HeroImage capa={restaurant.capa}>
        <S.ContainerInfo>
          <S.CategoriaInfo>
            {restaurant.tipo.charAt(0).toUpperCase() + restaurant.tipo.slice(1)}
          </S.CategoriaInfo>
          <h3>{restaurant.titulo}</h3>
        </S.ContainerInfo>
      </S.HeroImage>
    </>
  )
}

export default Hero
