import { Header } from './components/Header'
import { Highlights } from './components/Highlights'
import { Posts } from './components/Posts'
import { UserProfileData } from './components/UserProfileData'
import { UsernameInfo } from './components/UsernameInfo'

export function App() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="h-full w-full max-h-screen max-w-[420px] overflow-auto bg-black">
        <Header />

        <UserProfileData />

        <UsernameInfo />

        <Highlights />

        <Posts />
      </div>
    </div>
  )
}
