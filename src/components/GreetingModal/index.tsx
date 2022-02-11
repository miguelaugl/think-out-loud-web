import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { SocketEvents } from "../../interfaces";
import { socket } from "../../services";

const NAME_MAX_LENGTH = 15

export function GreetingModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState('')
  useEffect(() => {
    const notLogged = !sessionStorage.getItem('logged_as');
    if (notLogged) {
      setIsOpen(true)
    }
  }, [])
  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    setIsOpen(false)
    sessionStorage.setItem('logged_as', name)
    setName('')
    socket.emit(SocketEvents.USER_CONNECTED, sessionStorage.getItem('logged_as'))
  }
  if (!isOpen) return null
  return (
    <div className="backdrop-blur-sm absolute w-full h-full flex items-center justify-center bg-[#0f172acc] px-3">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-[#1e293b] p-4 rounded-md z-index-md flex flex-col">
        <strong className="text-xl">Tell us your name:</strong>
        <input 
          className="w-full rounded-md bg-slate-900 py-2 px-4 resize-none my-4"
          maxLength={NAME_MAX_LENGTH}
          value={name}
          onChange={handleNameChange}
          placeholder="Your name"
        />
        <button 
          className="bg-gradient-to-r from-blue-400 to-blue-400 hover:to-blue-500 font-bold rounded-full px-5 py-2 ml-auto transition duration-300 disabled:opacity-75 disabled:pointer-events-none" 
          type="submit"
          disabled={!name.length}
        >
          Let's go
        </button>
      </form>
    </div>
  )
}