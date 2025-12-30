'use client'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { useRouter } from "next/navigation"
import Navbar from "./Navbar"

export function UserDropdown() {
  const router=useRouter();

  const handleLogout=()=>{
    router.push('/sign-in');
  }

  const user = { name: "Kavya Gupta", email: "kavya@example.com" }; 
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center gap-3 text-gray-4 hover:text-yellow-500">
                <Avatar className="h-8 w-8">
        <AvatarImage src="https://github.com/evilrabbit.png" alt="@shadcn" />
        <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">{user.name.charAt(0)}</AvatarFallback>
      </Avatar>
         <div className="hidden md:flex flex-col items-start">
          <span className="text-base font-medium text-gray-400">{user.name}</span>
         </div>
        </Button>
      </DropdownMenuTrigger>


      <DropdownMenuContent>
        
          <DropdownMenuItem>
            {user.name}
            
          </DropdownMenuItem>
          <DropdownMenuItem>
            {user.email}
            
          </DropdownMenuItem>
          
        <DropdownMenuSeparator />
        <DropdownMenuItem className="" onClick={handleLogout} >
          <div className="hover:text-yellow-400 transition-colors">Log out</div>
        </DropdownMenuItem>
          <DropdownMenuSeparator className="hidden sm:block" />
          <nav className="sm:hidden">
            <Navbar/>
          </nav>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
