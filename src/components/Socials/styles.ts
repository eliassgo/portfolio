import styled from 'styled-components'

export const ListaMediaSocials = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    li {
      padding: 5px 5px 15px 5px;
    }
  }

  li {
    padding-top: 10px;
    padding-bottom: 10px;
  }
`
