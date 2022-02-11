import io from 'socket.io-client'
import settings from '../settings'


const socket = io(settings.apiUrl)
export { socket }