type props = {
  tipo: string
  numero: number
}
const teste = 's'

export default function Home({ tipo = 't' }: props) {
  return (
    <div>
      {tipo}
      {teste}
    </div>
  )
}
