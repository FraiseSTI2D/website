import { User } from '@fraise-sti2d/types'
import {
  Button,
  Group,
  Paper,
  SimpleGrid,
  Text,
  Textarea,
  TextInput,
} from '@mantine/core'
import { Form } from 'remix'
import { Mail } from 'tabler-icons-react'
import { ContactIcon, TContactIcon } from './ContactIcon'
import { useStyles } from './ContactSection.style'

export function ContactSection({
  isAuth,
  user,
}: {
  isAuth: boolean
  user: User | null
}) {
  const { classes } = useStyles()

  const contacts: TContactIcon[] = [
    {
      description: 'fraisesti2d@gmail.com',
      title: 'Email',
      icon: Mail,
    },
  ]

  return (
    <Paper shadow="md" radius="lg">
      <div className={classes.wrapper}>
        <div className={classes.contacts}>
          <Text
            size="lg"
            weight={700}
            className={classes.title}
            sx={{ color: '#fff' }}
          >
            Information de contact
          </Text>

          <Group direction="column">
            {contacts.map((contact, i) => (
              <ContactIcon key={i} {...contact} />
            ))}
          </Group>
        </div>

        <Form className={classes.form}>
          <Text size="lg" weight={700} className={classes.title}>
            Contactez-nous
          </Text>

          <div className={classes.fields}>
            <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
              {isAuth ? (
                <>
                  <TextInput
                    label="Votre nom"
                    value={user?.username}
                    disabled
                  />
                  <TextInput
                    label="Votre email"
                    type="email"
                    value={user?.email}
                    required
                    disabled
                  />
                </>
              ) : (
                <>
                  <TextInput label="Votre nom" />
                  <TextInput label="Votre email" required type="email" />
                </>
              )}
            </SimpleGrid>

            <TextInput mt="md" label="Sujet" required />

            <Textarea
              mt="md"
              label="Votre message"
              placeholder="Faites en sorte que votre message sois le plus explicite possible"
              minRows={3}
            />

            <Group position="right" mt="md">
              <Button color="red" type="submit" className={classes.control}>
                Envoyer le message
              </Button>
            </Group>
          </div>
        </Form>
      </div>
    </Paper>
  )
}
