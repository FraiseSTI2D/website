import { useQuery } from 'react-query'
import axios from 'axios'
import { TStats } from '@fraise-sti2d/types'
import { API_URL } from '~/utils/constants'

export async function useStats() {
  return await axios.get<TStats[]>(`${API_URL}/stats`)
}
