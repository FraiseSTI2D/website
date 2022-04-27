import { createStyles } from '@mantine/core'

export default createStyles(theme => ({
  inner: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '100%',

    [theme.fn.smallerThan('sm')]: {
      justifyContent: 'flex-start',
    },
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    color: '#fff',
    textDecoration: 'none',
  },

  social: {
    width: 260,
    color: '#fff',

    [theme.fn.smallerThan('sm')]: {
      width: 'auto',
      marginLeft: 'auto',
    },
  },

  burger: {
    marginRight: theme.spacing.md,

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
}))
