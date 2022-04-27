import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets'
import { Server } from 'socket.io'
import { Box } from '@prisma/client'

@WebSocketGateway()
export class BoxsGateway {
  @WebSocketServer()
  server: Server

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
