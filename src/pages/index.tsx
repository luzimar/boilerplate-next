type Props = {
  title: string
}
const teste = 'teste'
const teste2 = 'teste2'

export default function Home({ title = 'Hello World' }: Props) {
  return <div>{title}</div>
}
