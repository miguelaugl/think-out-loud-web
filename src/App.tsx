import { useEffect } from "react";
import { GreetingModal, Header, Messages } from "./components";
import { SocketEvents } from "./interfaces";
import { socket } from "./services";
import toast, { Toaster } from 'react-hot-toast'

export function App() {
  useEffect(() => {
    socket.on(SocketEvents.USER_CONNECTED, (name: string) => {
      toast.success(`Usuário ${name} conectado com sucesso!`, {
        duration: 2000
      })
    })
  }, [])
  return (
    <>
      <div className="w-full grow max-w-xl px-4 mx-auto bg-slate-800">
        <Header />
        <Messages />
      </div>
      <GreetingModal />
      <Toaster toastOptions={{ position: 'bottom-center' }} />
    </>
  )
}