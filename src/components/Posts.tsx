import { CameraPlus } from '@phosphor-icons/react'
import { useState, ChangeEvent } from 'react'
import { BiMoviePlay, BiUserPin, BiGrid } from 'react-icons/bi'

export function Posts() {
  const [posts, setPosts] = useState<string[]>([])

  function handleAddPicture(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.files?.length === 0) return

    setPosts((prev) => {
      return [URL.createObjectURL(event.target.files![0]), ...prev]
    })
  }

  return (
    <div className="pt-3">
      <div className="grid grid-cols-3 place-items-center">
        <div className="p-2">
          <BiGrid className="h-6 w-6" />
        </div>
        <div className="p-2">
          <BiMoviePlay className="h-6 w-6" />
        </div>
        <div className="p-2">
          <BiUserPin className="h-6 w-6" />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-y-px gap-x-px">
        {posts.map((post) => {
          return (
            <div
              key={crypto.randomUUID()}
              className="h-32 w-auto flex items-center justify-center"
            >
              <img src={post} className="h-full aspect-video" />
            </div>
          )
        })}
        <label
          htmlFor="AddPost"
          className="h-32 flex items-center justify-center bg-zinc-700 cursor-pointer"
        >
          <CameraPlus size={32} weight="fill" />
        </label>
        <input
          id="AddPost"
          type="file"
          className="absolute top-0 hidden"
          onChange={handleAddPicture}
        />
      </div>
    </div>
  )
}
