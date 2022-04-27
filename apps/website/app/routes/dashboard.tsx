import { AppShell } from '@mantine/core'
import { Outlet } from 'remix'
import { Sidebar } from '~/pages/dashboard/layout'

export default function Dashboard() {
  return (
    <AppShell navbar={<Sidebar />}>
      <Outlet />
    </AppShell>
  )
}
