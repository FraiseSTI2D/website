import { TChildrenProp } from '../../../utils/types'
import { TSectionStyleProps } from './Section.props'
import useStyles from './Section.style'

export function Section({
	direction,
	children
}: TSectionStyleProps & TChildrenProp) {
	const { classes } = useStyles({ direction })

	return <section className={classes.section}>{children}</section>
}
