import { Card, Group, Overlay, Text, useMantineTheme } from '@mantine/core'
import useStyles from './Card.style'

export type TCardImageProps = {
  img: string
  title: string
  description: string
  pourcentage: number
}

export function CardImage({ img, title, description, pourcentage }: TCardImageProps) {
  const { classes } = useStyles()
  const theme = useMantineTheme()

  return (
    <Group align="center" position="center" spacing="xl" grow>
      <Card
        radius="md"
        style={{ backgroundImage: `url(${img})` }}
        className={classes.card}
      >
        <Overlay
          gradient={`linear-gradient(105deg, ${theme.black} 20%, #312f2f 50%, ${theme.colors.gray[4]} 100%)`}
          opacity={0.55}
          zIndex={0}
        />

        <div className={classes.content}>
          <Text size="lg" weight={700} className={classes.title}>
            {title}
          </Text>

          <Text size="sm" className={classes.description}>
            {description}
          </Text>

          <Progress color="red" className={classes.action} value={pourcentage} label={`${pourcentage}%`} radius="xl" />
        </div>
      </Card>
    </Group>
  )
}
