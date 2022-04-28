import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef('control')

  return {
    wrapper: {
      paddingTop: theme.spacing.xl * 2,
      minHeight: 480,
      backgroundImage: `linear-gradient(-60deg, ${theme.colors.red[4]} 0%, ${theme.colors.red[7]} 100%)`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'top left',
      position: 'relative',
      borderRadius: theme.radius.md,
    },

    title: {
      color: theme.white,
      fontSize: 52,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      marginBottom: theme.spacing.xl * 1.5,
    },

    item: {
      marginTop: theme.spacing.xl,
      backgroundColor: theme.white,
      borderBottom: 0,
      borderRadius: theme.radius.md,
      boxShadow: theme.shadows.lg,
    },

    control: {
      fontSize: theme.fontSizes.lg,
      padding: `${theme.spacing.lg}px ${theme.spacing.xl}px`,
      color: theme.black,

      '&:hover': {
        backgroundColor: 'transparent',
      },
    },

    content: {
      paddingLeft: theme.spacing.xl,
      lineHeight: 1.6,
      color: theme.black,
    },

    icon: {
      ref: icon,
      marginLeft: theme.spacing.md,
    },

    gradient: {
      backgroundImage: `radial-gradient(${theme.colors.red[6]} 0%, ${theme.colors.red[5]} 100%)`,
    },

    itemOpened: {
      [`& .${icon}`]: {
        transform: 'rotate(45deg)',
      },
    },

    button: {
      display: 'block',
      marginTop: theme.spacing.md,

      '@media (max-width: 755px)': {
        display: 'block',
        width: '100%',
      },
    },
  }
})
