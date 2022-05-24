import { Prisma, Box } from '@prisma/client'

export interface IBoxsService {
  find(): Promise<Box[]>
  random(): Promise<Box[]>
  findOne(id: number): Promise<Box>
  create(data: Prisma.BoxUncheckedCreateInput): Promise<Box>
  update(id: number, data: Prisma.BoxUncheckedUpdateInput): Promise<Box>
  delete(id: number): Promise<Box>
}
