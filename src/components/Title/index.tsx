import { Title as TitleStyle } from './style'

export type Props = {
  children: string
  fontSize?: number
  marginBottom?: number
}

const Title = (props: Props) => (
  <TitleStyle fontSize={props.fontSize} marginBottom={props.marginBottom}>
    {props.children}
  </TitleStyle>
)

export default Title
