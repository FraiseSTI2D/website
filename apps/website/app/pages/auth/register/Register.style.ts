import { createStyles } from '@mantine/core'

export const useStyles = createStyles(theme => ({
  wrapper: {
    minHeight: 900,
    height: '100%',
    backgroundSize: 'cover',
    backgroundImage: 'url(/images/champs-fraises2.jpg)',
  },

  form: {
    paddingLeft: 30,
    paddingRight: 30,
    borderRight: `1px solid ${theme.colors.gray[3]}`,
    minHeight: 900,
    height: '100%',
    maxWidth: 450,
    paddingTop: 80,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: '70%',
      height: '70%',
      margin: '0 auto',
    },
  },

  title: {
    color: theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      fontSize: '18px',
    },
  },

  logo: {
    color: theme.black,
    width: 120,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}))
