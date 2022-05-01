import { AppShell } from '@mantine/core'
import { Outlet } from 'remix'

export default function BoxsLayout() {
  return (
    <AppShell>
      <Outlet />
    </AppShell>
  )
}
