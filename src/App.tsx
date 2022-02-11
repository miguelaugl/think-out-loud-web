import { GreetingModal, Header, Messages } from "./components";

export function App() {
  return (
    <>
      <div className="w-full grow max-w-xl px-4 mx-auto bg-slate-800">
        <Header />
        <Messages />
      </div>
      <GreetingModal />
    </>
  )
}