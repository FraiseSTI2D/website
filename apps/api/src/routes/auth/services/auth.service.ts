import { Injectable, Inject } from '@nestjs/common'
import { IAuthService } from '../interfaces'
import { IUsersService, CreateUserDto } from '@modules/users'
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt'
import { User } from '@prisma/client'

@Injectable()
export class AuthService implements IAuthService {
  constructor(
    @Inject('USERS_SERVICE') private readonly usersService: IUsersService,
    private readonly jwtService: JwtService
  ) {}

  async register(data: CreateUserDto) {
    return await this.usersService.create(data)
  }

  async validateUser(username: string, password: string): Promise<User | null> {
    const user = await this.usersService.findOne(username)
    const isMatchPassword = await bcrypt.compare(password, user.password)
    if (isMatchPassword && user) return user

    return null
  }

  login(user: any) {
    const payload = { username: user.username, sub: user.userId }
    return {
      access_token: this.jwtService.sign(payload),
    }
  }
}
