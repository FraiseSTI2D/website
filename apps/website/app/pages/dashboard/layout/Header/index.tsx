import { User } from '@fraise-sti2d/types'
import {
  Burger,
  Container,
  Group,
  Menu,
  Tabs,
  Text,
  UnstyledButton,
} from '@mantine/core'
import { useBooleanToggle } from '@mantine/hooks'
import { useState } from 'react'
import { NavLink } from 'remix'
import { ChevronDown, Logout, Message, Settings } from 'tabler-icons-react'
import { Image } from '~/components/base'
import { useStyles } from './Header.style'
import Logo from '~/images/logo.png'

type THeader = {
  user: User
}

export function HeaderTabs({ user }: THeader) {
  const { classes, theme, cx } = useStyles()
  const [opened, toggleOpened] = useBooleanToggle(false)
  const [userMenuOpened, setUserMenuOpened] = useState(false)

  return (
    <header className={classes.header}>
      <Container className={classes.mainSection}>
        <Group position="apart">
          <Image src={Logo} alt="Logo" />
          <Burger
            opened={opened}
            onClick={() => toggleOpened()}
            className={classes.burger}
            size="sm"
          />

          <Menu
            size={260}
            placement="end"
            transition="pop-top-right"
            className={classes.userMenu}
            onClose={() => setUserMenuOpened(false)}
            onOpen={() => setUserMenuOpened(true)}
            control={
              <UnstyledButton
                className={cx(classes.user, {
                  [classes.userActive]: userMenuOpened,
                })}
              >
                <Group spacing={7}>
                  <Text weight={500} size="sm" sx={{ lineHeight: 1 }} mr={3}>
                    {user.username}
                  </Text>
                  <ChevronDown size={12} />
                </Group>
              </UnstyledButton>
            }
          >
            <Menu.Item
              icon={<Message size={14} color={theme.colors.blue[6]} />}
            >
              Vos notifications
            </Menu.Item>

            <Menu.Label>Paramètres</Menu.Label>
            <Menu.Item icon={<Settings size={14} />}>
              <NavLink to="/dashboard/settings">
                Paramètres de votre compte
              </NavLink>
            </Menu.Item>
            <Menu.Item color="red" icon={<Logout size={14} />}>
              Déconnexion
            </Menu.Item>
          </Menu>
        </Group>
      </Container>
      <Container>
        <Tabs
          variant="outline"
          classNames={{
            root: classes.tabs,
            tabsListWrapper: classes.tabsList,
            tabControl: classes.tabControl,
            tabActive: classes.tabControlActive,
          }}
        ></Tabs>
      </Container>
    </header>
  )
}
