import axios from 'axios'
import { API_URL } from '~/utils/constants'
import { Box } from '@fraise-sti2d/types'
import { useCheckAuth } from './auth'

export type TBoxCallback = {
  data: Box
}

export async function useBox(
  request: Request,
  id: number
): Promise<TBoxCallback> {
  const { session } = await useCheckAuth(request)

  const { data } = await axios.get<Box>(`${API_URL}/boxs/${id}`, {
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${session.get('token')}`,
    },
  })

  return {
    data,
  }
}
