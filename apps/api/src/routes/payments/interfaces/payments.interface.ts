import { CreatePaymentDto } from '../dto'

export interface IPaymentsService {
  find()
  create(data: CreatePaymentDto)
}
export interface IPaymentsGateway {}
