type Props = {
  title: string
}
const t = 'd'
export default function Home({ title = 'Hello World' }: Props) {
  return <div>{title}</div>
}
