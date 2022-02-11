import { ChangeEvent, useRef, useState } from "react";

const CHAT_MAX_LENGTH = 255

export function App() {
  const [message, setMessage] = useState('')
  const chatRef = useRef<HTMLTextAreaElement | null>(null)
  const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value)
  }
  const chatCurrentLength = chatRef.current?.value.length || 0
  return (
    <div className="w-full grow max-w-xl px-4 mx-auto bg-slate-800">
      <h1 className="text-3xl font-bold text-center my-8 uppercase">Think out loud</h1>
      <div className="w-full max-w-xl bg-slate-700 mx-auto p-4 rounded flex flex-col">
        <h3 className="text-xl font-bold mb-2">Share here your thoughts:</h3>
        <textarea 
          className="w-full rounded-md bg-slate-900 p-4 resize-none"
          maxLength={CHAT_MAX_LENGTH}
          ref={chatRef}
          value={message}
          onChange={handleMessageChange}
          placeholder="What are you thinking?"
          rows={4}
        />
        <p className="b-0 text-xs mt-2 ml-auto font-semibold">{chatCurrentLength} / {CHAT_MAX_LENGTH}</p>
        <button className="bg-gradient-to-r from-blue-400 to-blue-400 hover:to-blue-500 mt-2 font-bold rounded-full px-10 py-2 ml-auto transition duration-300" type="button">Send</button>
      </div>
    </div>
  );
}