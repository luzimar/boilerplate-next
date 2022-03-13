type props = {
  tipo: string
  numero: number
}

export default function Home({ tipo = 't' }: props) {
  return <div>{tipo}</div>
}
