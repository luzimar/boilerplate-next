type Props = {
  title: string
}

export default function Home({ title = 'Hello World' }: Props) {
  return <div>{title}</div>
}
