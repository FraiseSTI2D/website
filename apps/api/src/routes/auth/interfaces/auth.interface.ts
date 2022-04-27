import { User } from '@prisma/client'
import { CreateUserDto } from '@modules/users'

export interface IAuthService {
  validateUser(username: string, password: string): Promise<User | null>
  login(user: any): any
  register(data: CreateUserDto): any
}
