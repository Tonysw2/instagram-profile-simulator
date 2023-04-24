import { Bell, CaretLeft, DotsThree } from "@phosphor-icons/react";
import { GoVerified } from "react-icons/go";

export function Header() {
  return (
    <header className="py-2 px-3 grid grid-cols-3">
      <CaretLeft size={24} weight="bold" className="justify-self-start" />

      <div className="flex items-center gap-1 justify-self-center">
        <p contentEditable className="font-bold">
          username
        </p>
        <GoVerified className="h-4 w-4 text-blue-500" />
      </div>

      <div className="flex items-center gap-6 justify-self-end">
        <Bell size={24} />
        <DotsThree size={24} />
      </div>
    </header>
  );
}
