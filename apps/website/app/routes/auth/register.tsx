import {
  Anchor,
  Button,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from '@mantine/core'
import { ActionFunction, Form, LoaderFunction, redirect } from 'remix'
import { useStyles } from '~/pages/auth/register'
import { useRegister } from '~/utils/hooks'
import { getSession } from '~/utils/session'

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request.headers.get('Cookie'))
  if (session.has('token') && session.has('user')) return redirect('/dashboard')
  return null
}

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData()
  const { data } = await useRegister({
    username: form.get('username') as string,
    password: form.get('password') as string,
  })
  if (data !== null) return redirect('/auth/login')
}

export default function Register() {
  const { classes } = useStyles()
  return (
    <Form method="post">
      <Paper className={classes.form} radius={0}>
        <Title
          order={2}
          className={classes.title}
          align="center"
          mt="md"
          mb={50}
        >
          Bienvenue sur FraiseSTI2D. Vous souhaitez créer un compte ?
        </Title>

        <TextInput
          label="Adresse Email"
          placeholder="hello@gmail.com"
          size="md"
        />
        <PasswordInput
          label="Mot de passe"
          placeholder="Votre mot de passe"
          mt="md"
          size="md"
        />
        <Button color="red" fullWidth mt="xl" size="md">
          Connexion
        </Button>

        <Text align="center" mt="md">
          Vous ne possédez pas de compte?{' '}
          <Anchor<'a'> href="/auth/register" weight={700}>
            Créé un compte
          </Anchor>
        </Text>
      </Paper>
    </Form>
  )
}
