import styled from 'styled-components'

import { Props } from '.'

export const Title = styled.h1<Props>`
  color: ${(props) => props.theme.corPrincipal};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  margin-bottom: ${(props) =>
    props.marginBottom ? props.marginBottom + 'px' : '0'};
  font-weight: bold;
`
