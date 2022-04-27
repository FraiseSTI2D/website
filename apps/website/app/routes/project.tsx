import { AppShell, Space } from '@mantine/core'
import {
  ProjectSection,
  SolutionsSection,
  useStyles,
  HeaderWithHero,
} from '~/pages/Project'
import { useBooleanToggle } from '@mantine/hooks'
import { Footer, ScrollToTop, Main } from '~/components/layouts'
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
        <HeaderWithHero
          isAuth={isAuth}
          opened={opened}
          toggleOpened={toggleOpened}
        />
      }
    >
      <Main classes={classes}>
        <ProjectSection />
        <Space h="xl" />
        <SolutionsSection />
      </Main>
      <ScrollToTop />
      <Footer />
    </AppShell>
  )
}
