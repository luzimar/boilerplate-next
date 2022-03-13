type props = {
  tipo: string
}
export default function Home({ tipo = 't' }: props) {
  return <div>{tipo}</div>
}
