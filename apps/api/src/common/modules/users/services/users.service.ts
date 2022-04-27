import { Inject, Injectable } from '@nestjs/common'
import * as bcrypt from 'bcrypt'
import { Services } from '@utils/constants'
import { PrismaService } from '@modules/prisma'
import { IUsersService } from '../interfaces'
import { User } from '@prisma/client'
import { TUserModel } from '@fraise-sti2d/types'
import { CreateUserDto, UpdateUserDto } from '../dto'

@Injectable()
export class UsersService implements IUsersService {
  constructor(
    @Inject(Services.Prisma) private readonly prisma: PrismaService
  ) {}

  async findOne(username: string): Promise<User> {
    return await this.prisma.user.findUnique({
      where: {
        username,
      },
      include: { boxs: true, payments: true },
    })
  }

  async create(data: CreateUserDto): Promise<User> {
    return await this.prisma.user.create({
      data: {
        username: data.username,
        email: data.email,
        password: await bcrypt.hash(data.password, 10),
      },
      include: { boxs: true },
    })
  }

  async update(username: string, data: UpdateUserDto): Promise<User> {
    return await this.prisma.user.update({
      where: {
        username,
      },
      data,
      include: { boxs: true },
    })
  }

  async delete(username: string): Promise<User> {
    return await this.prisma.user.delete({
      where: {
        username,
      },
      include: { boxs: true },
    })
  }
}
