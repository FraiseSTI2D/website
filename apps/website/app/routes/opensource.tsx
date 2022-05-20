import { AppShell } from '@mantine/core'
import { useBooleanToggle } from '@mantine/hooks'
import { LoaderFunction, useLoaderData } from 'remix'
import { Footer, Main, ScrollToTop, Header } from '~/components/layouts'
import { useStyles } from '~/pages/Opensource'
import { useIsAuth, useStats } from '~/utils/hooks'

interface LoaderData {
  isAuth: boolean
}

export const loader: LoaderFunction = async ({
  request,
}): Promise<LoaderData> => {
  const { data: stats } = await useStats()
  const isAuth = await useIsAuth(request)

  return {
    isAuth,
  }
}

export default function OpenSourcePage() {
  const { isAuth } = useLoaderData<LoaderData>()
  const [opened, toggleOpened] = useBooleanToggle()
  const { classes } = useStyles()
  return (
    <AppShell 
      header={
        <Header
          isAuth={isAuth}
          opened={opened}
          toggleOpened={toggleOpened}
        />
      }
    >
      <Main classes={classes}></Main>
      <ScrollToTop />
      <Footer />
    </AppShell>
  )
}
