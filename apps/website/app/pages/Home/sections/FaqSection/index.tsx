import { Accordion, Container, ThemeIcon, Title } from '@mantine/core'
import { Plus } from 'tabler-icons-react'
import { useStyles } from './FaqSection.style'

type Question = {
  text: string
  question: string
}

export function FaqSection() {
  const { classes } = useStyles()
  const questions: Question[] = [
    {
      question: "Qu'est ce que nous faisons ?",
      text: 'Nous travaillons',
    },
  ]

  return (
    <div className={classes.wrapper}>
      <Container size="sm">
        <Title align="center" className={classes.title}>
          Foire aux questions
        </Title>

        <Accordion
          iconPosition="right"
          initialItem={0}
          classNames={{
            item: classes.item,
            itemOpened: classes.itemOpened,
            control: classes.control,
            icon: classes.icon,
            contentInner: classes.content,
          }}
          icon={
            <ThemeIcon radius="xl" className={classes.gradient} size={32}>
              <Plus size={18} />
            </ThemeIcon>
          }
        >
          {questions.map(({ text, question }, i) => (
            <Accordion.Item key={i} label={question}>
              {text}
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </div>
  )
}
