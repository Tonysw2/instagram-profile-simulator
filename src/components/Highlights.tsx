import { useState } from 'react'
import { AvatarUI } from './AvatarUI'
import { Plus } from '@phosphor-icons/react'

export function Highlights() {
  const [countHighlight, setCountHighlight] = useState(0)

  function handleCountHighlight() {
    setCountHighlight((prevCount) => prevCount + 1)
  }

  return (
    <div className="mx-2 py-1 flex items-center gap-4 overflow-auto">
      {Array.from({ length: countHighlight }).map((_) => {
        return (
          <div className="flex flex-col items-center justify-center gap-1">
            <AvatarUI type="highlight" />
            <p contentEditable className="text-xs">
              descrição
            </p>
          </div>
        )
      })}

      <div className="flex flex-col items-center justify-center gap-1">
        <button
          className="h-[60px] w-[60px] flex items-center justify-center border border-zinc-400 rounded-full"
          onClick={handleCountHighlight}
        >
          <Plus size={24} />
        </button>
        <p className="text-xs">Novo</p>
      </div>
    </div>
  )
}
