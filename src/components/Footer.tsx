import {
  House,
  MagnifyingGlass,
  ShoppingBag,
  User,
} from '@phosphor-icons/react'
import { BiMoviePlay } from 'react-icons/bi'

export function Footer() {
  return (
    <footer className="absolute right-0 bottom-0 left-0 py-3 px-4 flex items-center justify-between bg-black">
      <div>
        <House size={24} weight="fill" />
      </div>
      <div>
        <MagnifyingGlass size={24} />
      </div>
      <div>
        <BiMoviePlay className="h-6 w-6" />
      </div>
      <div>
        <ShoppingBag size={24} />
      </div>
      <div>
        <User size={24} />
      </div>
    </footer>
  )
}
