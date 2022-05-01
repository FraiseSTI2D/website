import { LoaderFunction, useLoaderData } from 'remix'

export const loader: LoaderFunction = () => {}

export default function BoxsPage() {
  const data = useLoaderData()
  return <></>
}
