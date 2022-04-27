import { redirect } from 'remix'
import { getSession } from '~/utils/session'

export async function useCheckAuth(request: Request): Promise<any> {
  const session = await getSession(request.headers.get('Cookie'))

  if (!session.has('token')) throw redirect('/auth/login')

  return { session }
}
