import { Module } from '@nestjs/common'
import { Services } from '~/common/utils/constants'
import { PrismaService } from './prisma.service'

const providersAndExports = [
  {
    provide: Services.Prisma,
    useClass: PrismaService
  }
]

@Module({
  providers: providersAndExports,
  exports: providersAndExports
})
export class PrismaModule {}