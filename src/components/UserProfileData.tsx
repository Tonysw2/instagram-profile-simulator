import { AvatarUI } from './AvatarUI'

export function UserProfileData() {
  return (
    <div className="px-3 flex items-center justify-between">
      <AvatarUI type="avatar" />

      <div className="flex items-center gap-6">
        <div className="flex flex-col items-center">
          <span className="font-bold text-sm">252</span>
          <p className="text-sm">Publicações</p>
        </div>

        <div className="flex flex-col items-center">
          <span className="font-bold text-sm">5,1M</span>
          <p className="text-sm">Seguidores</p>
        </div>

        <div className="flex flex-col items-center">
          <span className="font-bold text-sm">125</span>
          <p className="text-sm">Seguindo</p>
        </div>
      </div>
    </div>
  )
}
