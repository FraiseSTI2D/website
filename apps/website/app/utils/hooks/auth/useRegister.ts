import { TCredentials } from '~/utils//types'
import { API_URL } from '~/utils/constants'
import axios from 'axios'

export async function useRegister(
  credentials: TCredentials
): Promise<{ error: string | null; data: boolean | null }> {
  const { data, status } = await axios.post(
    `${API_URL}/auth/register`,
    credentials,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
  console.log(data)

  if (status === 409) return { error: '', data: null }

  return { data, error: null }
}
