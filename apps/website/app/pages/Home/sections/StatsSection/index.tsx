import { TStats } from '@fraise-sti2d/types'
import { useStyles } from './StatsSection.style'
import { Text } from '@mantine/core'

type TStatsSection = {
  stats: TStats[]
}

export function StatsSection({ stats }: TStatsSection) {
  const { classes } = useStyles()
  return (
    <div className={classes.root}>
      {stats.map(stat => (
        <div key={stat.title} className={classes.stat}>
          <Text className={classes.count}>{stat.count}</Text>
          <Text className={classes.title}>{stat.title}</Text>
          <Text className={classes.description}>{stat.description}</Text>
        </div>
      ))}
    </div>
  )
}
