import { Menu } from '../components/RestaurantList'

export const parseToBrl = (amount: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount)
}

export const getTotalPrice = (items: Menu[]) => {
  return items.reduce((acc, value) => {
    return acc + value.preco
  }, 0)
}
