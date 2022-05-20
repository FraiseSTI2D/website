import axios from 'axios'
import { API_URL } from '~/utils/constants'
import { Box } from '@fraise-sti2d/types'

export type TBoxCallback = {
  data: Box
}

export async function useBox(
  id: number
): Promise<TBoxCallback> {
  const { data } = await axios.get<Box>(`${API_URL}/boxs/${id}`)
  return {
    data,
  }
}
