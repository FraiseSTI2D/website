import { ActionIcon, Anchor, Container, Group, Text } from '@mantine/core'
import { BrandGithub, Mail } from 'tabler-icons-react'
import { Image } from '~/components/base'
import useStyles from './Footer.style'

export function Footer() {
  const { classes } = useStyles()

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
