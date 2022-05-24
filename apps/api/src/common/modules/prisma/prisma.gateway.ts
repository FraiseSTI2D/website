import {
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets'
import { Server } from 'socket.io'
import { TStats } from '@fraise-sti2d/types'

@WebSocketGateway()
export class PrismaGateway {
  @WebSocketServer()
  server: Server

  statsUpdate(stats: TStats[]) {
    this.server.emit('statsUpdate', stats)
  }
}