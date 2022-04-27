import { Module } from '@nestjs/common'
import { PrismaModule } from '@modules/prisma'
import { PaymentsController } from './controllers'
import { PaymentsService } from './services'
import { PaymentsGateway } from './gateways'
import { Services, Gateways } from '@utils/constants'

@Module({
  imports: [PrismaModule],
  controllers: [PaymentsController],
  providers: [
    {
      provide: Services.Payment,
      useClass: PaymentsService,
    },
    {
      provide: Gateways.Payment,
      useClass: PaymentsGateway,
    },
  ],
})
export class PaymentsModule {}
