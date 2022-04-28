import { Box, Text, ThemeIcon } from '@mantine/core'
import { Icon } from 'tabler-icons-react'
import { useStyles } from './ContactIcon.style'

export type TContactIcon = {
  icon: Icon
  title: string
  description: string
}

export function ContactIcon({ icon: Icon, title, description }: TContactIcon) {
  const { classes } = useStyles()
  return (
    <div className={classes.wrapper}>
      <Box mr="md">
        <Icon size={24} />
      </Box>

      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description}>{description}</Text>
      </div>
    </div>
  )
}
