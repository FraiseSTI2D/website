import { createStyles } from '@mantine/core'

export const useStyles = createStyles(theme => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    color: theme.white,
  },

  icon: {
    marginRight: theme.spacing.md,
    backgroundImage: `linear-gradient(135deg, ${theme.colors.red[4]} 0%, ${theme.colors.red[6]} 100%)`,
    backgroundColor: 'transparent',
  },

  title: {
    color: theme.colors.red[0],
  },

  description: {
    color: theme.white,
  },
}))
