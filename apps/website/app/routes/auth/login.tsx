import { ActionFunction, Form, redirect, LoaderFunction } from 'remix'
import {
  Text,
  TextInput,
  PasswordInput,
  Button,
  Title,
  Paper,
  Anchor,
} from '@mantine/core'
import { useLogin } from '~/utils/hooks'
import { commitSession, getSession } from '~/utils/session'
import { useStyles } from '~/pages/auth/login'

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request.headers.get('Cookie'))
  if (session.has('token') && session.has('user')) return redirect('/dashboard')
  return null
}

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData()
  const { data } = await useLogin({
    username: form.get('username') as string,
    password: form.get('password') as string,
  })

  const session = await getSession()
  session.set('token', data?.token)
  session.set('user', { username: data?.username })
  return redirect('/dashboard', {
    headers: {
      'Set-Cookie': await commitSession(session),
    },
  })
}

export default function LoginPage() {
  const { classes } = useStyles()
  return (
    <Form method="post" className={classes.wrapper}>
      <Paper className={classes.formComputer} radius={0}>
        <Title
          order={2}
          className={classes.title}
          align="center"
          mt="md"
          mb={50}
        >
          Bienvenue sur FraiseSTI2D. Vous souhaitez vous connectez à nos
          services ?
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
        <Button type="submit" color="red" fullWidth mt="xl" size="md">
          Connexion
        </Button>

        <Text align="center" mt="md">
          Vous ne possédez pas de compte?{' '}
          <Anchor<'a'> href="/auth/register" weight={700}>
            Créé un compte
          </Anchor>
        </Text>
      </Paper>
      <Paper
        className={classes.formTabletAndMobile}
        withBorder
        shadow="md"
        radius="md"
      >
        <Title
          order={2}
          className={classes.title}
          align="center"
          mt="md"
          mb={50}
        >
          Bienvenue sur FraiseSTI2D. Vous souhaitez vous connectez à nos
          services ?
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
        <Button type="submit" color="red" fullWidth mt="xl" size="md">
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
