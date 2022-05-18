import { AppShell } from '@mantine/core'
import { useStyles } from '~/pages/Branding'
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
          opened={opened} 
          toggleOpened={toggleOpened} 
          isAuth={isAuth} 
        />
      }
    >
      <Main classes={classes}></Main>
      <ScrollToTop />
      <Footer />
    </AppShell>
  )
}
