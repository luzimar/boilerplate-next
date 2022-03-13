type props = {
  tipo: string
  versao: number
}

export default function Home({ tipo = 't' }: props) {
  return <div>{tipo}</div>
}
