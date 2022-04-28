import React from 'react'
import { Socket } from 'socket.io-client'

export const SocketIoContext = React.createContext<Socket>({} as unknown as any)

export function SocketIoProvider({
  client,
  children,
}: {
  client: Socket
  children: React.ReactNode
}) {
  return (
    <SocketIoContext.Provider value={client}>
      {children}
    </SocketIoContext.Provider>
  )
}
