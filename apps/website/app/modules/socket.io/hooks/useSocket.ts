import { useContext } from 'react'
import { SocketIoContext } from '../context'

export function useSocket() {
  return useContext(SocketIoContext)
}
