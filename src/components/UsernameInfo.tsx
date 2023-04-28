import { Link, UserPlus } from '@phosphor-icons/react'

export function UsernameInfo() {
  return (
    <div className="py-2 px-3 flex flex-col gap-3">
      <div className="flex flex-col gap-1">
        <p contentEditable className="font-bold text-sm">
          username
        </p>

        <p contentEditable className="text-sm text-[#ffffff50]">
          Public
        </p>

        <p contentEditable className="text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
          sapiente odio doloribus beatae assumenda
        </p>

        <p className="flex items-center gap-2 font-bold text-sm text-blue-300">
          <Link size={16} weight="bold" />
          <span contentEditable>Some link here</span>
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <button className="w-full py-2 px-3 flex items-center justify-center font-bold text-sm bg-blue-500 rounded-sm">
          Seguir
        </button>

        <div className="grid grid-cols-[1fr_1fr_1fr_auto] gap-x-2">
          <button className="w-full py-2 px-3 flex items-center justify-center font-bold text-sm bg-zinc-600 rounded-sm">
            Mensagem
          </button>
          <button className="w-full py-2 px-3 flex items-center justify-center font-bold text-sm bg-zinc-600 rounded-sm">
            Inscrever
          </button>
          <button className="w-full py-2 px-3 flex items-center justify-center font-bold text-sm bg-zinc-600 rounded-sm">
            Contato
          </button>
          <button className="w-full py-2 px-3 flex items-center justify-center font-bold text-sm bg-zinc-600 rounded-sm">
            <UserPlus size={14} weight="bold" />
          </button>
        </div>
      </div>
    </div>
  )
}
