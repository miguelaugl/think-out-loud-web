import io from 'socket.io-client'

const SERVER = 'http://localhost:3333'
export const socket = io(SERVER)