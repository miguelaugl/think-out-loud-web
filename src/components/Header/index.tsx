import { ChangeEvent, FormEvent, useState } from "react";
import { SocketEvents } from "../../interfaces";
import { socket } from "../../services";

const CHAT_MAX_LENGTH = 255

export function Header() {
  const [message, setMessage] = useState('')
  const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value)
  }
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    const messageSent = {
      user: localStorage.getItem('logged_as'),
      text: message,
      date: new Date()
    }
    socket.emit(SocketEvents.MESSAGE_SENT, messageSent)
    setMessage('')
  }
  return (
    <>
      <h1 className="text-3xl font-bold text-center my-8 uppercase">Think out loud</h1>
      <form className="w-full max-w-xl bg-gray-700 mx-auto p-4 rounded flex flex-col" onSubmit={handleSubmit}>
        <h3 className="text-xl font-bold mb-2">Share here your thoughts:</h3>
        <textarea 
          className="w-full rounded-md bg-slate-900 p-4 resize-none"
          maxLength={CHAT_MAX_LENGTH}
          value={message}
          onChange={handleMessageChange}
          placeholder="What are you thinking?"
          rows={4}
        />
        <p className="b-0 text-xs mt-2 ml-auto font-semibold">{message.length} / {CHAT_MAX_LENGTH}</p>
        <button 
          className="bg-gradient-to-r from-blue-400 to-blue-400 hover:to-blue-500 mt-2 font-bold rounded-full px-10 py-2 ml-auto transition duration-300 disabled:opacity-75 disabled:pointer-events-none" 
          type="submit"
          disabled={!message.length}
        >
          Send
        </button>
      </form>
    </>
  );
}