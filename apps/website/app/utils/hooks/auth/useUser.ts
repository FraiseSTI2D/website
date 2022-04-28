import { User } from '@fraise-sti2d/types'
import { getSession } from '~/utils/session'
import { useIsAuth } from './useIsAuth'

export async function useUser(request: Request): Promise<User | null> {
  const isAuth = await useIsAuth(request)
  const session = await getSession(request.headers.get('Cookie'))
  return isAuth ? session.get('user') : null
}
