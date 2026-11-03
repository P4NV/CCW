import { Avatar, AvatarImage, AvatarFallback, AvatarBadge } from "@/components/ui/avatar.tsx";
import { useState } from "react";
import { ChevronsDownUp, ChevronsUpDown } from "lucide-react";
export default function List() {
  const [expansion, setExpand] = useState(false);
  return (
    <div className="bg-gray-700 w-full h-fit py-3 px-4 flex justify-between">
      <Avatar className="w-14 h-14">
        <AvatarImage src="/img.png" className="rounded-sm" />
        <AvatarFallback>CCW</AvatarFallback>
        <AvatarBadge color="green" />
      </Avatar>
      {expansion === false ? (
        <ChevronsUpDown className="text-white size-15 mr-2" onClick={() => setExpand(!expansion)} />
      ) : (
        <ChevronsDownUp className="text-white size-15 mr-2" onClick={() => setExpand(!expansion)} />
      )}
      {expansion === true ? <div>cunti</div> : null}
    </div>
  );
}
