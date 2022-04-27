import { Anchor, Navbar as NavbarMantine } from '@mantine/core'
import { TLinks } from '../../../utils/types'

export function Navbar({ links, opened }: { links: TLinks; opened: boolean }) {
	return (
		<NavbarMantine
			p="md"
			hiddenBreakpoint="sm"
			hidden={!opened}
			width={{ sm: 300 }}
		>
			{links.map((link) => (
				<Anchor style={{ color: '#fff' }} key={link.label} href={link.link}>
					{link.label}
				</Anchor>
			))}
		</NavbarMantine>
	)
}
