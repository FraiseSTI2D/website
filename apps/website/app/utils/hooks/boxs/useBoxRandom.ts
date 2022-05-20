import axios from 'axios'
import { API_URL } from '~/utils/constants'
import { Box } from '@fraise-sti2d/types'

export async function useBoxRandom(): Promise<{ data: Box }> {
  const { data } = await axios.get<Box>(`${API_URL}/boxs/random`)
  return {
    data,
  }
}