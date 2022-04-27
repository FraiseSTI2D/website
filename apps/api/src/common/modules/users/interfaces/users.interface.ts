import { User } from '@prisma/client'
import { CreateUserDto, UpdateUserDto } from '../dto'

export interface IUsersService {
  findOne(username: string): Promise<User>
  create(data: CreateUserDto): Promise<User>
  update(username: string, data: UpdateUserDto): Promise<User>
  delete(username: string): Promise<User>
}
