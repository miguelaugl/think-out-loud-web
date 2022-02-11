import { useEffect, useState } from "react"
import { SocketEvents } from "../../interfaces"
import { socket } from "../../services"

export function Messages() {
  const [messages, setMessages] = useState<string[]>([])
  useEffect(() => {
    socket.on(SocketEvents.MESSAGE_SENT, (message: string) => {
      setMessages(messages => ([message, ...messages]));
    })
  }, [])
  return (
    <ul className="flex flex-col w-full mt-4">
      {messages.map(message => (
        <li className="flex flex-col rounded p-4 bg-gray-900 mb-4">
          <p className="text-xl font-bold">Miguel Freitas</p>
          <p>{message}</p>
        </li>
      ))}
    </ul>
  )
}