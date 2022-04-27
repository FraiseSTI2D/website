import { LoaderFunction, useLoaderData } from 'remix'
import { useCheckAuth, User } from '~/utils/hooks'

export const loader: LoaderFunction = async ({ request }) => {
  const { session } = await useCheckAuth(request)
  return session.get('user')
}

export default function DashboardRoute() {
  const data = useLoaderData<User>()
  return <>{JSON.stringify(data)}</>
}
