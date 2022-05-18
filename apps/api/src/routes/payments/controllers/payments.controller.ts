import {
  Controller,
  Inject,
  Get,
  UseGuards,
  Body,
  Post,
} from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtAuthGuard } from '~/routes/auth/guards'
import { Services } from '@utils/constants'
import { IPaymentsService } from '../interfaces'
import { CreatePaymentDto } from '../dto'

@UseGuards(JwtAuthGuard)
@Controller('payments')
export class PaymentsController {
  constructor(
    @Inject(Services.Payment)
    private readonly paymentsService: IPaymentsService,
    private readonly configService: ConfigService
  ) {}

  @Get()
  async getPayments() {
    return await this.paymentsService.find()
  }

  @Post()
  async createPayment(@Body() data: CreatePaymentDto) {
    return await this.paymentsService.create(data)
  }

  @Get('key')
  async getKeyPayment() {
    return {
      stripeKey: this.configService.get('STRIPE_PUBLIC_KEY'),
    }
  }
}
