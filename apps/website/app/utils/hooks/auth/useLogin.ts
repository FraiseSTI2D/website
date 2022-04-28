import { TCredentials } from '~/utils/types'
import axios from 'axios'
import { API_URL } from '~/utils/constants'
import { User } from '@fraise-sti2d/types'

export async function useLogin(
  credentiels: TCredentials
): Promise<{ error: string | null; data: ({ token: string } & User) | null }> {
  const { data, status } = await axios.post<{ access_token: string }>(
    `${API_URL}/auth/login`,
    credentiels,
    {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )

  if (status === 403) return { error: 'Unauthorized', data: null }

  const { status: profileStats, data: profileData } = await axios.get<User>(
    `${API_URL}/auth/profile`,
    {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${data.access_token}`,
      },
    }
  )

  if (profileStats === 403) return { error: 'Unauthorized', data: null }

  return {
    error: null,
    data: {
      ...profileData,
      token: data.access_token,
    },
  }
}
