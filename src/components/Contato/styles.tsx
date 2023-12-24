import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

import * as enums from '../../utils/enums/Contato'

type TagProps = {
  social?: enums.Social
  tipoTel?: enums.TipoTel
  parametro: 'tipoTel' | 'social'
}

function retornaCorDeFundo(props: TagProps): string {
  // if ('social' in props) {
  if (props.parametro === 'social') {
    if (props.social === enums.Social.AMIGOS) return variaveis.verde
    if (props.social === enums.Social.FAMILIA) return variaveis.amarelo
    if (props.social === enums.Social.TRABALHO) return variaveis.amarelo2
  } else {
    if (props.tipoTel === enums.TipoTel.CELULAR) return variaveis.amarelo
    if (props.tipoTel === enums.TipoTel.FIXO) return variaveis.amarelo2
  }
  return ' ${variaveis.cinza2};'
}

export const Card = styled.div`
  background-color: ${variaveis.branco2};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.9);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
`
export const Tag = styled.span<TagProps>`
  padding: 2px 10px;
  color: ${variaveis.branco};
  font-weigh: bold;
  font-size: 10px;
  background-color: ${(props) => retornaCorDeFundo(props)};
  border-radius: 8px;
  margin-right: 1%;
  margin-left: 8px;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rrgba(0, 0, 0, 0.5);
  padding-top: 16px;
`

export const Botao = styled.button`
  font-weigh: bold;
  font-size: 12px;
  color: ${variaveis.branco};
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.cinzaEscuro};
  border-radius: 8px;
  margin-right: 8px;
  margin-left: 8px;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`
