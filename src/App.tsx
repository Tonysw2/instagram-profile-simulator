import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Highlights } from './components/Highlights'
import { Posts } from './components/Posts'
import { UserProfileData } from './components/UserProfileData'
import { UsernameInfo } from './components/UsernameInfo'

export function App() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="relative max-h-[600px] max-w-[420px] flex flex-col">
        <div className="w-full mb-12 overflow-auto bg-black scrollbar scrollbar-w-1 scrollbar-thumb-rounded-full scrollbar-thumb-neutral-700">
          <Header />

          <UserProfileData />

          <UsernameInfo />

          <Highlights />

          <Posts />
        </div>

        <Footer />
      </div>
    </div>
  )
}
