import { Injectable, OnModuleInit, OnModuleDestroy, INestApplication } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'
import { PrismaGateway } from './prisma.gateway'

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor(private readonly prismaGateway: PrismaGateway) {
    super()
  }

  async onModuleInit() {
    await this.$connect()
    this.$use(async (params, next) => {
      if(params.action === 'create' || params.action === 'delete') {
        this.prismaGateway.statsUpdate(params.args.data)
      }
      return next(params)
    })
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });    
  }

  async onModuleDestroy() {
    await this.$disconnect()
  }
}