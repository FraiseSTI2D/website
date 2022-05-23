import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { BoxsModule } from './routes/boxs'
import { AuthModule } from './routes/auth'
import { IndexModule } from './routes/index'
import { PaymentsModule } from './routes/payments'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    BoxsModule,
    AuthModule,
    PaymentsModule,
    IndexModule,
  ],
})
export class AppModule {}
