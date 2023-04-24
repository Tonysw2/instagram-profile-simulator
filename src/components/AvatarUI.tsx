import { User } from '@phosphor-icons/react'
import * as Avatar from '@radix-ui/react-avatar'
import { useState, ChangeEvent } from 'react'

interface AvatarUIProps {
  type: 'avatar' | 'highlight'
}

export function AvatarUI({ type }: AvatarUIProps) {
  const [imageUrl, setImageUrl] = useState('')
  const randomID = crypto.randomUUID()

  function handleFile(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.files?.length === 0) return

    setImageUrl(URL.createObjectURL(event.target.files![0]))
  }

  return (
    <Avatar.Root
      className={`${
        type === 'avatar'
          ? 'h-[90px] w-[90px] bg-story'
          : 'h-[60px] w-[60px] bg-zinc-400'
      } rounded-full flex items-center justify-center`}
    >
      <label htmlFor={randomID}>
        <Avatar.Image
          src={imageUrl}
          alt=""
          className={`${
            type === 'avatar' ? 'h-[84px] w-[84px]' : 'h-[58px] w-[58px]'
          } flex items-center justify-center bg-black rounded-full cursor-pointer`}
        />
      </label>

      <Avatar.Fallback className="flex items-center justify-center">
        <label
          htmlFor={randomID}
          className={`${
            type === 'avatar' ? 'h-[84px] w-[84px]' : 'h-[58px] w-[58px]'
          } flex items-center justify-center bg-black rounded-full cursor-pointer`}
        >
          <User size={24} />
        </label>
      </Avatar.Fallback>

      <input
        id={randomID}
        type="file"
        accept="image/*"
        className="absolute top-0 -z-10 hidden"
        onChange={handleFile}
      />
    </Avatar.Root>
  )
}
