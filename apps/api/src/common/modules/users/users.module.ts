import { Module } from '@nestjs/common'
import { PrismaModule } from '@modules/prisma'
import { UsersService } from './services'

const providersAndExports = [
  {
    provide: 'USERS_SERVICE',
    useClass: UsersService
  }
]

@Module({
  imports: [PrismaModule],
  providers: providersAndExports,
  exports: providersAndExports
})
export class UsersModule {}
