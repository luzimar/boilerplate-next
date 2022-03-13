type Props = {
  title: string
}
const t = 't'
export default function Home({ title = 'Hello World' }: Props) {
  return <div>{title}</div>
}
