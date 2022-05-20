import { Inject, Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '@modules/prisma'
import { Services } from '@utils/constants'
import { IBoxsService } from '../interfaces'
import { boxSelect } from '../utils/constants'
import { Prisma, Box } from '@prisma/client'

@Injectable()
export class BoxsService implements IBoxsService {
  constructor(
    @Inject(Services.Prisma) private readonly prismaService: PrismaService
  ) {}

  async random(): Promise<Box> {
    const productsCount = await this.prismaService.box.count();
    const skip = Math.floor(Math.random() * productsCount);
    return await this.prismaService.box.findMany({
        take: 1,
        skip: skip,
        orderBy: {
            sellingCount: 'desc',
        },
    });
  }

  async find(): Promise<Box[]> {
    return await this.prismaService.box.findMany({
      select: boxSelect,
    })
  }

  async findOne(id: number): Promise<Box> {
    const box = await this.prismaService.box.findUnique({
      where: {
        id,
      },
      select: boxSelect,
    })
    if (!box) throw new NotFoundException()

    return box
  }

  async create(data: Prisma.BoxUncheckedCreateInput): Promise<Box> {
    return await this.prismaService.box.create({
      data,
      select: boxSelect,
    })
  }

  async update(id: number, data: Prisma.BoxUncheckedUpdateInput): Promise<Box> {
    await this.findOne(id)
    return await this.prismaService.box.update({
      data,
      select: boxSelect,
      where: {
        id,
      },
    })
  }

  async delete(id: number): Promise<Box> {
    return await this.prismaService.box.delete({
      where: {
        id,
      },
      select: boxSelect,
    })
  }
}
