import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

export function CreatePostButton() {

   const createPostOptions = [
    {
      name:'Job',
      url: '/admin-post/job/create-job'
    },
    {
      name:'Procuements',
      url: '/admin-post/job/create-job'
    },
    {
      name:'Scholarships',
      url: '/admin-post/job/create-job'
    },
    {
      name:'Corporate Notices',
      url: '/admin-post/job/create-job'
    },
    {
      name:'Courses',
      url: '/admin-post/job/create-job'
    },
    {
      name:'Events',
      url: '/admin-post/job/create-job'
    },
  ]
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="default">Create Post<ChevronDown color="white"/></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuGroup>
          {
            createPostOptions.map((i, id)=>(
              <Link key={id} href={i.url}>
                <DropdownMenuItem >
                  {i.name}
                </DropdownMenuItem>                
              </Link>
            
            ))
          }


        </DropdownMenuGroup>

      </DropdownMenuContent>
    </DropdownMenu>
  )
}
