import styled from 'styled-components'

export const ListaMediaSocials = styled.ul`
  display: flex;
  margin-top: 20px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    li {
      padding: 5px 5px 5px 5px;
    }
  }

  li {
    cursor: pointer;
    padding-right: 20px;
  }
  a {
    text-decoration: none;
  }
`
