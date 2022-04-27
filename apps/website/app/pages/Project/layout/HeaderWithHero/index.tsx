import {
  Header as HeaderMantine,
  Container,
  Button,
  Overlay,
  Title,
  Text,
} from '@mantine/core'
import { Header } from '~/components/layouts'
import useStyles from './HeaderWithHero.style'

export function HeaderWithHero({
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
    <HeaderMantine
      height={700}
      style={{
        borderBottomLeftRadius: '45px',
        borderBottomRightRadius: '45px',
      }}
    >
      <div className={classes.hero}>
        <Overlay
          gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 0%)"
          opacity={1}
          zIndex={0}
        />
        <Header isAuth={isAuth} toggleOpened={toggleOpened} opened={opened} />

        <Container className={classes.container}>
          <Title className={classes.title}>FraiseSTI2D</Title>
          <Text className={classes.description} size="xl" mt="xl">
            FraiseSTI2D est un nom de projet pour produire de manière plus
            autonme des fraises et pouvoir les faire pousser dans 2 boxs de
            véhicule
          </Text>

          <Button color="red" size="xl" radius="xl" className={classes.control}>
            Suite
          </Button>
        </Container>
      </div>
    </HeaderMantine>
  )
}
