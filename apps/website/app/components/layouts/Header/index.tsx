import {
  Header as HeaderMantine,
  Container,
  Burger,
  Group,
  ActionIcon,
  Anchor,
} from '@mantine/core'
import { NavLink } from 'remix'
import { Mail, BrandGithub } from 'tabler-icons-react'
import { Image } from '~/components/base/Image'
import useStyles from './Header.style'
import { AuthLink } from './links'

export function Header({
  opened,
  toggleOpened,
  isAuth,
}: {
  opened: boolean
  toggleOpened: Function
  isAuth: boolean
}) {
  const { classes } = useStyles()

  return (
    <Container className={classes.inner}>
      <div>
        <Burger
          opened={opened}
          color="#fff"
          onClick={() => toggleOpened()}
          size="sm"
          className={classes.burger}
        />

        <Image
          src="/build/images/logo.png"
          alt="Fraise STI2D icon"
          width="120"
        />
      </div>

      <Group spacing={1} className={classes.links}>
        <NavLink to="/" className={classes.link}>
          Accueil
        </NavLink>
        <NavLink to="project" className={classes.link}>
          Projet
        </NavLink>
        <NavLink to="opensource" className={classes.link}>
          OpenSource
        </NavLink>
        <AuthLink isAuth={isAuth} classes={classes} />
      </Group>

      <Group spacing={0} className={classes.social} position="right" noWrap>
        <Anchor href="">
          <ActionIcon size="lg">
            <BrandGithub size={18} />
          </ActionIcon>
        </Anchor>
        <Anchor href="mailto:fraisesti2d@gmail.com">
          <ActionIcon size="lg">
            <Mail size={18} />
          </ActionIcon>
        </Anchor>
      </Group>
    </Container>
  )
}
