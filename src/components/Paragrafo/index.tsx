import { P } from './style'

export type Props = {
  children: string // conteúdo do componente react
  tipo?: 'principal' | 'secundario'
  fontSize?: number
  marginBottom?: number
}

const Paragrafo = ({
  children,
  tipo = 'principal',
  fontSize,
  marginBottom
}: Props) => (
  <P tipo={tipo} fontSize={fontSize} marginBottom={marginBottom}>
    {children}
  </P>
)

export default Paragrafo
