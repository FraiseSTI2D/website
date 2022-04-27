import {
  Box,
  ChevronIcon,
  Collapse,
  Group,
  ThemeIcon,
  UnstyledButton,
} from '@mantine/core'
import { useState } from 'react'
import { NavLink } from 'remix'
import {
  ChevronLeft,
  ChevronRight,
  Icon as TablerIcon,
} from 'tabler-icons-react'
import { TSidebarLink } from '.'
import { useStyles } from './SidebarSubLink.style'

export function SidebarSubLink({
  Icon,
  label,
  items,
}: {
  Icon: TablerIcon
  label: string
  items: TSidebarLink[]
}) {
  const { classes, theme } = useStyles()
  const [opened, setOpened] = useState(false)
  const ChevronIcon = theme.dir === 'ltr' ? ChevronRight : ChevronLeft
  return (
    <>
      <UnstyledButton
        onClick={() => setOpened(o => !o)}
        className={classes.control}
      >
        <Group position="apart" spacing={0}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <ThemeIcon variant="light" size={30}>
              <Icon size={18} />
            </ThemeIcon>
            <Box ml="md">{label}</Box>
          </Box>
          <ChevronIcon
            className={classes.chevron}
            size={14}
            style={{
              transform: opened
                ? `rotate(${theme.dir === 'rtl' ? -90 : 90}deg)`
                : 'none',
            }}
          />
        </Group>
      </UnstyledButton>
      <Collapse in={opened}>
        {items.map(({ icon: Icon, label, link }) => (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <ThemeIcon variant="light" size={30}>
              <Icon size={18} />
            </ThemeIcon>
            <NavLink to={link}>{label}</NavLink>
          </Box>
        ))}
      </Collapse>
    </>
  )
}
