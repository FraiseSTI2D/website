import { Affix, Button, Transition } from '@mantine/core'
import { useWindowScroll } from '@mantine/hooks'
import { ArrowUp } from 'tabler-icons-react'

export function ScrollToTop() {
	const [scroll, scrollTo] = useWindowScroll()

	return (
		<Affix position={{ bottom: 20, right: 20 }}>
			<Transition transition="slide-up" mounted={scroll.y > 0}>
				{(transitionStyles) => (
					<Button
						color="red"
						leftIcon={<ArrowUp />}
						style={transitionStyles}
						onClick={() => scrollTo({ y: 0 })}
					>
						Haut de la page
					</Button>
				)}
			</Transition>
		</Affix>
	)
}
