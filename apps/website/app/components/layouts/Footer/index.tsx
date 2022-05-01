import { NavLink } from '.pnpm/react-router-dom@6.3.0_react-dom@17.0.2+react@17.0.2/node_modules/react-router-dom'
import { ActionIcon, Anchor, Container, Group, Text } from '@mantine/core'
import { BrandGithub, Mail } from 'tabler-icons-react'
import { Image } from '~/components/base'
import useStyles from './Footer.style'

type FooterLink = {
  title: string
  links: { text: string; link: string }[]
}

export function Footer() {
  const { classes } = useStyles()

  const footerLinks: FooterLink[] = [
    {
      title: 'Projet',
      links: [
        {
          link: '/project',
          text: 'Présentation',
        },
        {
          link: '/opensource',
          text: 'OpenSource',
        },
        {
          link: '/changelogs',
          text: 'Modification',
        },
        {
          link: '/releases',
          text: 'Mises à jours',
        },
        {
          link: '/branding',
          text: 'Charte Graphique',
        },
      ],
    },
    {
      title: 'Boxs',
      links: [
        {
          link: '/boxs',
          text: 'Liste des boxs',
        },
        {
          link: '/boxs/maps',
          text: 'Carte des boxs',
        },
      ],
    },
  ]

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Image
            src="/build/images/logo.png"
            alt="Fraise STI2D icon"
            width="120"
          />
        </div>
        <div className={classes.groups}>
          {footerLinks.map((footerLink, i) => (
            <div className={classes.wrapper} key={footerLink.title}>
              <Text className={classes.title}>{footerLink.title}</Text>
              <Group key={i} spacing="lg">
                {footerLink.links.map(({ link, text }) => (
                  <NavLink className={classes.link} to={link}>
                    {text}
                  </NavLink>
                ))}
              </Group>
            </div>
          ))}
        </div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text color="dimmed" size="sm">
          © 2022 FraiseSTI2D. Tout droit réservés.
        </Text>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <Anchor href="https://github.com/FraiseSTI2D">
            <ActionIcon style={{ color: 'black' }} size="lg">
              <BrandGithub size={18} />
            </ActionIcon>
          </Anchor>
          <Anchor href="mailto:fraisesti2d@gmail.com">
            <ActionIcon style={{ color: 'black' }} size="lg">
              <Mail size={18} />
            </ActionIcon>
          </Anchor>
        </Group>
      </Container>
    </footer>
  )
}
