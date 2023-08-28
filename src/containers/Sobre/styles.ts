import styled from 'styled-components'

export const GithubSecao = styled.div`
  margin-top: 32px;
  margin-bottom: 64px;
  display: flex;
  justify-content: space-between;
  background-color: #edf7fa;
  padding: 40px;
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
  }
  img {
    height: 157px;

    @media (max-width: 768px) {
      heigth: auto;
      width: 100%;
    }
  }
`

export const SobreSecao = styled.div``
