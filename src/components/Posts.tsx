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

      <div className="grid grid-cols-3 place-items-center gap-y-px gap-x-px">
        {posts.map((post) => {
          return (
            <div className="aspect-h-1 aspect-w-1 h-full w-full overflow-hidden flex items-center justify-center">
              <div className="flex items-center justify-center">
                <img
                  key={crypto.randomUUID()}
                  src={post}
                  className="aspect-auto"
                />
              </div>
            </div>
          )
        })}
        <label
          htmlFor="AddPost"
          className="aspect-h-1 aspect-w-1 h-full w-full flex items-center justify-center bg-zinc-950 cursor-pointer"
        >
          <div className="flex items-center justify-center">
            <CameraPlus size={32} weight="fill" />
          </div>
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
