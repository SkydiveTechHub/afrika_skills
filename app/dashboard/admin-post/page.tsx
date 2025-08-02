'use client'

import { PrimaryContainer } from '@/components/Containers'
import { CreatePostButton } from '@/components/CreatePostButton'
import { DescText, TitleText } from '@/components/Typo'
import { Button } from '@/components/ui/button'
import { Card,  CardFooter, CardHeader } from '@/components/ui/card'
import { Plus } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

const AdminPost = () => {
  const router = useRouter()
     const tabOptions = [
    {
      name:'Job',
      action: ()=>{router.push('/dashboard/admin-post/job')}
    },
    {
      name:'Procuements',
      action: ()=>{}
    },
    {
      name:'Scholarships',
      action: ()=>{}
    },
    {
      name:'Corporate Notices',
      action: ()=>{}
    },
    {
      name:'Courses',
      action: ()=>{}
    },
    {
      name:'Events',
      action: ()=>{}
    },
  ]
  return (
    <PrimaryContainer>
        <div><CreatePostButton/></div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>

          {
            tabOptions.map((i, id)=>(
              <Card key={id} className="">
                  <CardHeader>
                  </CardHeader>  

                  <div className='px-6'>
                    <TitleText text={i.name}/>              
                    <DescText text={`Total Revenue ${i.name}`}/> 
                  </div>

                  <CardFooter className="flex justify-between items-center gap-1.5 text-sm">
                    <div className="line-clamp-1 flex gap-2 font-medium">
                      <Button variant={'outline'}>Post {i.name.split(' ')[0]} <Plus/></Button>
                    </div>
                    <div className="text-muted-foreground">
                      <Button variant={'ghost'}>View All</Button>
                        
                    </div>
                  </CardFooter>
              </Card>              
            ))
          }


        </div>
    </PrimaryContainer>
  )
}

export default AdminPost