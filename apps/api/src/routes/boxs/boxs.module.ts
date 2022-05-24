import { Module } from '@nestjs/common'
import { PrismaModule } from '@modules/prisma'
import { BoxsController } from './controllers'
import { BoxsService } from './services'
import { BoxsGateway } from './gateways'
import { Gateways, Services } from '@utils/constants'

@Module({
  imports: [PrismaModule],
  controllers: [BoxsController],
  providers: [
    {
      provide: Services.Box,
      useClass: BoxsService
    },
    {
      provide: Gateways.Box,
      useClass: BoxsGateway
    }
  ],
})
export class BoxsModule {}
