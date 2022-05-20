import { Section } from "~/components/layouts"
import { Title, Grid } from '@mantine/core'

export function ColorsSections() {
  const colors = []
  return (
    <Section>
      <Title order={2}>Couleurs</Title>
      <Grid justify="center" align="center">
        {colors.map(({ color }) => (
          <Grid.Col span={3} style={{ backgroundColor: color, minHeight: 120 }}></Grid.Col>
        ))}
      </Grid>
    </Section>
  )
}