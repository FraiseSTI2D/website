import { Module } from '@nestjs/common'
import { IndexController } from './controllers'
import { Services } from '@utils/constants'
import { PrismaModule } from '@modules/prisma'
import { IndexService } from './services'

@Module({
  imports: [PrismaModule],
  controllers: [IndexController],
  providers: [
    {
      provide: Services.Index,
      useClass: IndexService,
    },
  ],
})
export class IndexModule {}
