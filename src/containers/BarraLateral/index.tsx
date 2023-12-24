import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import FiltroCard from '../../components/FiltroCard'

import * as S from './styles'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/Contato'
import BotaoAdicionar from '../../components/BotaoAdicionar'
import { Botao } from '../../components/Contato/styles'

type Props = {
  mostrarFiltro: boolean
}

const BarrraLateral = ({ mostrarFiltro }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        {mostrarFiltro ? (
          <>
            <S.Campo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
            />
            <S.Filtros>
              <FiltroCard
                valor={enums.Social.TRABALHO}
                criterio="social"
                legenda="Trabalho"
              />
              <FiltroCard
                valor={enums.Social.AMIGOS}
                criterio="social"
                legenda="amigos"
              />
              <FiltroCard
                valor={enums.Social.FAMILIA}
                criterio="social"
                legenda="familia"
              />
              <FiltroCard criterio="todas" legenda="Todos os contatos" />
              <BotaoAdicionar />
            </S.Filtros>
          </>
        ) : (
          <Botao onClick={() => navigate('/')}>Voltar para Contatos</Botao>
        )}
      </div>
    </S.Aside>
  )
}
export default BarrraLateral
