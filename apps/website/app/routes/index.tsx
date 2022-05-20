import { AppShell, Space } from '@mantine/core'
import { useBooleanToggle } from '@mantine/hooks'
import { LoaderFunction, useLoaderData } from 'remix'
import { Footer, ScrollToTop, Main } from '~/components/layouts'
import {
  useStyles,
  HeaderWithHero,
  StatsSection,
  FaqSection,
  ContactSection,
} from '~/pages/Home'
import { TStats, User } from '@fraise-sti2d/types'
import { useStats, useUser, useIsAuth } from '~/utils/hooks'
import { useSocket } from '~/modules/socket.io/hooks'
import { useEffect, useState } from 'react'

interface LoaderData {
  stats: TStats[]
  user: User | null
  isAuth: boolean
}

export const loader: LoaderFunction = async ({
  request,
}): Promise<LoaderData> => {
  const { data: stats } = await useStats()
  const user = await useUser(request)
  const isAuth = await useIsAuth(request)

  return {
    isAuth,
    user,
    stats: stats as TStats[],
  }
}

export default function HomePage() {
  const { stats, isAuth, user } = useLoaderData<LoaderData>()
  const [statsData, setStatsData] = useState(stats)
  const { classes } = useStyles()
  const [opened, toggleOpened] = useBooleanToggle()
  const io = useSocket()

  useEffect(() => {
    io.on('statsUpdate', (stats: TStats[]) => {
      if (statsData !== stats) {
        setStatsData(stats)
      }
    })
  }, [])

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
        <StatsSection stats={statsData} />
        <Space h={48} />
        <FaqSection />
        <Space h={48} />
        <ContactSection isAuth={isAuth} user={user} />
      </Main>
      <ScrollToTop />
      <Footer />
    </AppShell>
  )
}
