import { Avatar, AvatarImage, AvatarFallback, AvatarBadge } from "@/components/ui/avatar.tsx";

export default function List() {
  return (
    <div className="bg-gray-700 w-full h-fit py-3 px-4">
      <Avatar className="w-14 h-14">
        <AvatarImage src="/img.png" className="rounded-sm" />
        <AvatarFallback>CCW</AvatarFallback>
        <AvatarBadge color="green" />
      </Avatar>
    </div>
  );
}
