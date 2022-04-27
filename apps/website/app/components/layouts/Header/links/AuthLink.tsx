import { NavLink } from 'remix'

type TAuthLink = {
  classes: Record<'link', string>
  isAuth: boolean
}

export function AuthLink({ classes, isAuth }: TAuthLink) {
  return isAuth ? (
    <>
      <NavLink to="/auth/login" className={classes.link}>
        Connexion
      </NavLink>
      <NavLink to="/auth/register" className={classes.link}>
        Inscription
      </NavLink>
    </>
  ) : (
    <NavLink to="/auth/logout" className={classes.link}>
      Déconnexion
    </NavLink>
  )
}
