type props = {
  tipo: string
  numero: number
}
const t = 's'

export default function Home({ tipo = 't' }: props) {
  return (
    <div>
      {tipo}
      {t}
    </div>
  )
}
