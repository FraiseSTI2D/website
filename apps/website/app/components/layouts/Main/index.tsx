import { Container } from '@mantine/core'
import { TChildrenProp } from '../../../utils/types'

type TMainProps = {
  classes: Record<'container', string>
}

export const Main = ({ classes, children }: TMainProps & TChildrenProp) => (
  <Container className={classes.container}>{children}</Container>
)
