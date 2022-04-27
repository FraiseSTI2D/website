import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets'
import { Server } from 'socket.io'
import { IPaymentsGateway } from '../interfaces'

@WebSocketGateway()
export class PaymentsGateway implements IPaymentsGateway {
  @WebSocketServer()
  server: Server
}
