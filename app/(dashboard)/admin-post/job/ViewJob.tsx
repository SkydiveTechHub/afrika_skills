import { DescText, TitleText } from '@/components/Typo'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowLeft } from 'lucide-react'
import React from 'react'

const ViewJob = () => {
  return (
    <div>
        <div>
            <Button variant={'ghost'}><ArrowLeft/> Back to Jobs</Button> 
            <div>
                <div></div>
                <Button variant={'outline'}>Edit Job</Button>    
            </div>           
        </div>


        <Card className='w-full'>

            <div>
                <div>
                    <TitleText text='Senior UX Designer'/>
                    <DescText text='Google'/>
                </div>
            </div>

        </Card>
        <Card>
            <Tabs defaultValue="overview">
                <TabsList>
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="recruiter">Recruiter Details</TabsTrigger>
                    <TabsTrigger value="activity">Activities</TabsTrigger>
                </TabsList>
                <TabsContent value="overview">

                </TabsContent>
                <TabsContent value="recruiter">
                    <div>
                        <TitleText text='RecruiterDetails'/>

                        
                    </div>
                </TabsContent>
                <TabsContent value="activity">

                </TabsContent>
            </Tabs>
        </Card>
    </div>
  )
}

export default ViewJob