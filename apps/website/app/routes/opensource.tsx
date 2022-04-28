import { AppShell } from '@mantine/core'
import { Footer, Main, ScrollToTop } from '~/components/layouts'
import { useStyles } from '~/pages/opensource'

export default function OpenSourcePage() {
  const { classes } = useStyles()
  return (
    <AppShell>
      <Main classes={classes}></Main>
      <ScrollToTop />
      <Footer />
    </AppShell>
  )
}
