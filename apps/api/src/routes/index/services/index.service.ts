import { Inject } from '@nestjs/common'
import { TStats } from '@fraise-sti2d/types'
import { IIndexService } from '../interfaces'
import { Services } from '@utils/constants'
import { PrismaService } from '@modules/prisma'

export class IndexService implements IIndexService {
  constructor(
    @Inject(Services.Prisma) private readonly prismaService: PrismaService
  ) {}
  async stats(): Promise<TStats[]> {
    return [
      {
        title: 'Utilisateurs/trices',
        description:
          "Nombres d'utilisateurs et utilisatrices propriétaires d'un de nos boxs ou qui commandent auprès de nos propritétaires",
        count: await this.prismaService.user.count(),
      },
      {
        title: 'Boxs',
        description: 'Nombres de boxs en circulation',
        count: await this.prismaService.box.count(),
      },
    ]
  }
}
