import { Header } from "./components";
import { Messages } from "./components/Messages";

export function App() {
  return (
    <div className="w-full grow max-w-xl px-4 mx-auto bg-slate-800">
      <Header />
      <Messages />
    </div>
  )
}