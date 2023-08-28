import { Link } from 'react-router-dom'

import styled from 'styled-components'
import Title from '../Title'

export const Lista = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 36px;
  row-gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    column-gap: 0;
    row-gap: 16px;
  }
`

export const Titulo = styled(Title)``

export const Titulos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Button = styled(Link)`
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  color: #333;
  display: inline-block;
  font-size: 14px;
  cursor: pointer;
`

export const Divisor = styled.div`
  flex: 1;
  height: 1px;
  background-color: #ccc;
  margin: 0 10px;
`
