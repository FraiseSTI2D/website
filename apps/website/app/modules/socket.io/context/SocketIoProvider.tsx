import * as React from 'react'
import { Socket } from 'socket.io-client'
import { invariant } from 'ts-invariant'
import { getSocketIoContext } from './SocketIoContext'

export interface ApolloProviderProps {
  client: Socket
  children: React.ReactNode | React.ReactNode[] | null
}

export const SocketIoProvider: React.FC<ApolloProviderProps> = ({
  client,
  children,
}) => {
  const SocketIoContext = getSocketIoContext()
  return (
    <SocketIoContext.Consumer>
      {(context: any = {}) => {
        if (client && context.client !== client) {
          context = Object.assign({}, context, { client })
        }

        invariant(
          context.client,
          'SocketIoProvider was not passed a client instance. Make ' +
            'sure you pass in your client via the "client" prop.'
        )

        return (
          <SocketIoContext.Provider value={context}>
            {children}
          </SocketIoContext.Provider>
        )
      }}
    </SocketIoContext.Consumer>
  )
}
