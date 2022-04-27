import { getSession } from '~/utils/session'

export async function useIsAuth(request: Request) {
  const session = await getSession(request.headers.get('Cookie'))

  return session.has('token')
}
