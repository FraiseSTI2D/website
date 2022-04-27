import { AppShell, Space } from '@mantine/core'
import { useBooleanToggle } from '@mantine/hooks'
import { LoaderFunction, useLoaderData } from 'remix'
import { Footer, ScrollToTop, Main } from '~/components/layouts'
import { useStyles, HeaderWithHero, StatsSection } from '~/pages/Home'
import { TStats } from '@fraise-sti2d/types'
import { useStats } from '~/utils/hooks'
import { useIsAuth } from '~/utils/hooks'

interface LoaderData {
  stats: TStats[]
  isAuth: boolean
}

export const loader: LoaderFunction = async ({
  request,
}): Promise<LoaderData> => {
  const { data: stats } = await useStats()
  const isAuth = await useIsAuth(request)
  return {
    isAuth,
    stats: stats as TStats[],
  }
}

export default function HomePage() {
  const { stats, isAuth } = useLoaderData<LoaderData>()
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
        <StatsSection stats={stats} />
        <Space h="xl" />
      </Main>
      <ScrollToTop />
      <Footer />
    </AppShell>
  )
}
