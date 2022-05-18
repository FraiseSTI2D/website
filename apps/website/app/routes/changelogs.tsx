import { AppShell } from '@mantine/core'
import { useStyles } from '~/pages/ChangeLogs'
import { useBooleanToggle } from '@mantine/hooks'
import { Footer, ScrollToTop, Main, Header } from '~/components/layouts'
import { LoaderFunction, useLoaderData } from 'remix'
import { useIsAuth } from '~/utils/hooks'

interface LoaderData {
  isAuth: boolean
}

export const loader: LoaderFunction = async ({
  request,
}): Promise<LoaderData> => {
  const isAuth = await useIsAuth(request)

  return { isAuth }
}

export default function ProjectPage() {
  const { isAuth } = useLoaderData<LoaderData>()
  const { classes } = useStyles()
  const [opened, toggleOpened] = useBooleanToggle()
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
