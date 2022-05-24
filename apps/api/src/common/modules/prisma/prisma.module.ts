import { Module } from '@nestjs/common'
import { Services } from '@utils/constants'
import { PrismaService } from '.'
import { PrismaGateway } from './prisma.gateway'


const providersAndExports = [
  {
    provide: Services.Prisma,
    useClass: PrismaService
  }
]

@Module({
  providers: [
    ...providersAndExports,
    PrismaGateway
  ],
  exports: providersAndExports
})
export class PrismaModule {}