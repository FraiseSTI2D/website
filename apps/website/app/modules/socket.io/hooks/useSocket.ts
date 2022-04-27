import { Socket } from 'socket.io-client'
import { getSocketIoContext } from '~/modules/socket.io'
import { useContext } from 'react';
import { invariant } from 'ts-invariant';

export function useSocket(): Socket {
  const context = useContext(getSocketIoContext())
  invariant(
    !!context.client,
    'Could not find "client" in the context. ' +
    'Wrap the root component in an <SocketIoProvider>.');

  return context.client;
}