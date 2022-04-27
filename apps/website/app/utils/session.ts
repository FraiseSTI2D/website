import { createCookieSessionStorage } from 'remix'

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    cookie: {
      name: '__session',
      expires: new Date(Date.now() + 60000 * 60 * 24),
      httpOnly: true,
      maxAge: 60000 * 60 * 24,
      path: '/',
      sameSite: 'lax',
      secrets: ['esjfosfjseosefùjsfps^fsf^sfsle^sù'],
      secure: true,
    },
  })

export { getSession, commitSession, destroySession }
