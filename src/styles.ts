import { createGlobalStyle, styled } from 'styled-components'

export const cores = {
  rosa: '#E66767',
  rosaDoHover: '#E66700',
  HoverDoRosa: '#200000',
  rosaClaro: '#FFEBD9',
  brancoBeije: '#FFF8F2',
  branco: '#FFF',
  preto: '#000',
  whiteBackground: '#F5F5F5'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}
export const GlobalCSS = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    text-decoration: none;
  }
  body {
    background-color: ${cores.brancoBeije};
  }
`

export const Logo = styled.img`
  margin-top: 40px;
`

export const Container = styled.div`
  max-width: 980px;
  margin: 0 auto;
  padding: 80px 0;

  @media (max-width: ${breakpoints.desktop}) {
    width: 90%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 80%;
  }
`
