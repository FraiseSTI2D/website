import { createContext, Context } from 'react'
import { Socket } from 'socket.io-client'

export type TSocketIoContextValue = {
  client: Socket
}

export const getSocketIoContext = (): Context<TSocketIoContextValue> => {
  const context = createContext<TSocketIoContextValue>({
    client: null as unknown as any,
  })
  context.displayName = 'SOCKETIO_CONTEXT'
  return context
}
