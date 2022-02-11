import { useEffect, useState } from "react"
import { SocketEvents } from "../../interfaces"
import { socket } from "../../services"

type Message = {
  user: string
  text: string
  date: Date
}

export function Messages() {
  const [messages, setMessages] = useState([] as Message[])
  useEffect(() => {
    socket.on(SocketEvents.MESSAGE_SENT, (message: Message) => {
      setMessages(messages => ([message, ...messages]));
    })
  }, [])
  const formatMessageDate = (date: Date) => {
    return new Intl.DateTimeFormat('pt-BR', {
      year: 'numeric', 
      month: 'numeric', 
      day: 'numeric',
      hour: 'numeric', 
      minute: 'numeric', 
      second: 'numeric',
    }).format(new Date(date))
  }
  return (
    <ul className="flex flex-col w-full mt-4">
      {messages.map((message, index) => (
        <li key={index} className="flex flex-col rounded p-4 bg-gray-900 mb-4 relative">
          <p className="text-base md:text-xl font-bold">{message.user}</p>
          <time className="absolute right-4 top-5 text-xs">{formatMessageDate(message.date)}</time>
          <p className="text-sm md:text-base break-all">{message.text}</p>
        </li>
      ))}
    </ul>
  )
}