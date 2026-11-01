import { Avatar, AvatarImage } from "@/components/ui/avatar.tsx";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover.tsx";
import { Button } from "@/components/ui/button.tsx";
import { ChevronsUpDown } from "lucide-react";
import { ButtonGroup } from "@/components/ui/button-group.tsx";
import { Separator } from "@/components/ui/separator.tsx";

export default function TopBar() {
  return (
    <div className="bg-[#1f1c1e] w-full min-h-30 flex flex-row justify-between items-center px-10 ">
      <div className="flex items-center justify-center gap-10">
        <h1 className="text-5xl text-white tracking-tight font-black">C C W</h1>
      </div>
      <ButtonGroup aria-label="Button group" className="mt-auto mb-2">
        <Button variant="main" size="lg" className="w-30 rounded-l-2xl text-xl">
          orders
        </Button>
        <Button variant="main" size="lg" className="w-30 text-xl">
          cart
        </Button>
        <Button variant="main" size="lg" className="w-30 rounded-r-2xl text-xl">
          acc
        </Button>
      </ButtonGroup>
      <div className="flex gap-5">
        <Popover>
          <PopoverTrigger
            render={
              <Button variant="main" className="flex justify-end pl-2 rounded-r-3xl">
                <ChevronsUpDown className="text-white size-5 mr-2" />
                <div className="line-clamp-2 text-end">
                  <p>YourName</p>
                  <p>Yourexample@gmail.com</p>
                </div>
                <Avatar className="w-9 h-9">
                  <AvatarImage src="/img.png" />
                </Avatar>
              </Button>
            }
          />
          <PopoverContent className="w-60 " align="start">
            <p>account</p>
            <Separator />
            <p>settings</p>
            <p>settings</p>
            <p>settings</p>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
