type Props = {
  title: string
}
const teste = 'teste'

export default function Home({ title = 'Hello World' }: Props) {
  return <div>{title}</div>
}
