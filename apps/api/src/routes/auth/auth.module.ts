import { Module } from '@nestjs/common'
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt'
import { AuthController } from './controllers'
import { AuthService } from './services'
import { UsersModule } from '~/common/modules/users'
import { LocalStrategy, JwtStrategy } from './strategies'
import { PrismaModule } from '@modules/prisma'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { Services } from '@utils/constants'

@Module({
  imports: [
    ConfigModule.forRoot(),
    PrismaModule,
    UsersModule,
    PassportModule.register({ session: true }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => ({
        secret: config.get('SECRET_JWT'),
        signOptions: { expiresIn: '1h' }
      }),
      inject: [ConfigService]
    })
  ],
  controllers: [AuthController],
  providers: [
    {
      provide: Services.Auth,
      useClass: AuthService
    },
    LocalStrategy,
    JwtStrategy
  ]
})
export class AuthModule {}
