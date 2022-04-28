import {
  OnGatewayConnection,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets'
import { Server, Socket } from 'socket.io'
import { Box } from '@prisma/client'

@WebSocketGateway()
export class BoxsGateway implements OnGatewayConnection {
  @WebSocketServer()
  server: Server

  handleConnection(client: Socket, ...args: any[]) {
    console.log(client)
  }

  boxCreate(box: Box) {
    this.server.emit('boxCreate', box)
  }

  boxDelete(box: Box) {
    this.server.emit('boxDelete', box)
  }

  boxUpdate(oldBox: Box, newBox: Box) {
    this.server.emit('boxUpdate', oldBox, newBox)
  }
}
