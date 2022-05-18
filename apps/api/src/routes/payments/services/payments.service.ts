import { Inject, Injectable } from '@nestjs/common'
import { PrismaService } from '@modules/prisma'
import { Services } from '@utils/constants'
import { IPaymentsService } from '../interfaces'
import { CreatePaymentDto } from '../dto'

@Injectable()
export class PaymentsService implements IPaymentsService {
  constructor(
    @Inject(Services.Prisma) private readonly prismaService: PrismaService
  ) {}
  find() {
    throw new Error('Method not implemented.')
  }
  create(data: CreatePaymentDto) {
    throw new Error('Method not implemented.')
  }
}
