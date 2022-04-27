import { TStats } from '@fraise-sti2d/types'

export interface IIndexService {
  stats(): Promise<TStats[]>
}
