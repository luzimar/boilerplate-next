type Props = {
  title: string
}
export default function Card({ title = 'Hello World' }: Props) {
  return <div>{title}</div>
}
