import { useState } from 'react'
import { Navbar, Group, Code } from '@mantine/core'
import {
  BellRinging,
  Fingerprint,
  Key,
  Settings,
  TwoFA,
  DatabaseImport,
  Receipt2,
  SwitchHorizontal,
  Home,
  ArrowBackUp,
  Logout,
  Icon,
  Adjustments,
  Map2,
} from 'tabler-icons-react'
import { useStyles } from './Sidebar.style'
import { NavLink } from 'remix'

export type TSidebarLink = {
  link: string
  label: string
  icon: Icon
}

export function Sidebar() {
  const data: TSidebarLink[] = [
    { link: '/dashboard', label: 'Accueil Dashboard', icon: Home },
    { link: '/dashboard/maps', label: 'Carte de vos boxs', icon: Map2 },
    { link: '/dashboard/settings', label: 'Paramètres', icon: Adjustments },
  ]

  const { classes, cx } = useStyles()

  const links = data.map(item => (
    <NavLink
      className={({ isActive }) => cx(classes.link, isActive)}
      to={item.link}
      key={item.label}
    >
      <item.icon className={classes.linkIcon} />
      <span>{item.label}</span>
    </NavLink>
  ))

  return (
    <Navbar height={700} width={{ sm: 300 }}>
      <Navbar.Section grow>
        <Group className={classes.header} position="apart"></Group>
        {links}
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <NavLink to="/" className={classes.link}>
          <ArrowBackUp className={classes.linkIcon} />
          <span>Aller à la page d'accueil</span>
        </NavLink>

        <a href="#" className={classes.link}>
          <Logout className={classes.linkIcon} />
          <span>Déconnexion</span>
        </a>
      </Navbar.Section>
    </Navbar>
  )
}
