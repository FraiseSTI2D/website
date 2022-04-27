import { Navbar, Group } from '@mantine/core'
import {
  Box,
  Home,
  ArrowBackUp,
  Logout,
  Icon,
  Adjustments,
  Map2,
  Wallet,
  ReportAnalytics,
} from 'tabler-icons-react'
import { useStyles } from './Sidebar.style'
import { NavLink } from 'remix'
import { SidebarSubLink } from './SidebarSubLink'

export type TSidebarLink = {
  link: string
  label: string
  icon: Icon
}

type TLinkWithSubLinkSideBar = {
  icon: Icon
  title: string
  sublinks: TSidebarLink[]
}

export function Sidebar() {
  const sidebarLinks: TSidebarLink[] = [
    { link: '/dashboard', label: 'Accueil Dashboard', icon: Home },
    { link: '/dashboard/settings', label: 'Paramètres', icon: Adjustments },
  ]

  const linkWithSublinks: TLinkWithSubLinkSideBar[] = [
    {
      title: 'Boxs',
      icon: Box,
      sublinks: [
        { link: '/dashboard/boxs', label: 'Vos boxs', icon: Box },
        {
          link: '/dashboard/boxs/stats',
          label: 'Stastiques de vos boxs',
          icon: ReportAnalytics,
        },
        {
          link: '/dashboard/boxs/maps',
          label: 'Carte de vos boxs',
          icon: Map2,
        },
        {
          link: '/dashboard/boxs/payments',
          label: 'Payments sur vos boxs',
          icon: Wallet,
        },
      ],
    },
  ]

  const { classes, cx } = useStyles()

  const links = sidebarLinks.map(item => (
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
        {linkWithSublinks.map(({ sublinks, title, icon }) => (
          <SidebarSubLink Icon={icon} items={sublinks} label={title} />
        ))}
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
