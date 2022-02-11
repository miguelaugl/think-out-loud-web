export function Messages() {
  return (
    <ul className="flex flex-col w-full mt-4">
      {new Array(3).fill(0).map(i => (
        <li className="flex flex-col rounded p-4 bg-gray-900 mb-4">
          <p className="text-xl font-bold">Miguel Freitas</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur fuga officiis atque est dolore corporis quo, porro soluta dolorum maiores, voluptas explicabo ea exercitationem quod, vero blanditiis facere ad ex.</p>
        </li>
      ))}
    </ul>
  )
}