type Props = {
  title: string
}
const test = 'd'
export default function Home({ title = 'Hello World' }: Props) {
  return <div>{title}</div>
}
