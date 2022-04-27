import { createStyles } from '@mantine/core'
import { TSectionStyleProps } from './Section.props'

export default createStyles((theme, { direction }: TSectionStyleProps) => ({
	section: {
		display: 'flex',
		flexDirection: direction,
		width: '100%'
	}
}))
