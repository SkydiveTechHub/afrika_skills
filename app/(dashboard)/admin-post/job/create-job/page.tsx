'use client'

import { PrimaryContainer } from '@/components/Containers'
import { DatePicker } from '@/components/DatePicker'
import RichTextEditor from '@/components/TextEditor'
import { BasicText, DescText, TitleText } from '@/components/Typo'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from '@/components/ui/separator'
import React, { useState } from 'react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
//   DialogTrigger,
} from "@/components/ui/dialog"
import StatusPill from '@/components/StatusPill'
import { Checkbox } from '@/components/ui/checkbox'

const CreateJob = () => {
    const [open, setOpen] = useState<boolean>(false)
    const [startDate, setStartDate] = useState<Date | undefined>(undefined)
    const [endDate, setEndDate] = useState<Date | undefined>(undefined)
      const [content, setContent] = useState("<p>Initial content for editing...</p>");

  const handleSave = () => {
    console.log("Saved Content:", content);
    // Send to API or database
  };

  return (
    <PrimaryContainer>
        <div className='md:flex flex-row justify-between items-center'>
            <div>
                <TitleText text='Create Job'/>
                <DescText text='Add a new job posting.'/>
            </div>

            <div className='flex items-center gap-2'>
                <div className='flex items-center gap-2'>
                    <BasicText text='Job Status:'/>
                    {/* <Button>Post</Button> */}
                </div>
                <Separator orientation='vertical'/>
                <Button onClick={()=>setOpen(true)}>Post</Button>
            </div>
        </div>

        <Card>
            <CardContent className='grid  md:rid-cols-2'>
                <form>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-3">
                            <Input
                            id="email"
                            type="text"
                            placeholder="Job Title"
                            required
                            />
                            <Input
                            id="email"
                            type="text"
                            placeholder="Company"
                            required
                            />
                        </div>
                        <div className="grid md:grid-cols-2 gap-3">
                            <Input id="password" type="text" placeholder='Industry' required />
                            <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Work Structure" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="remote">Remote</SelectItem>
                                <SelectItem value="hybrid">Hybrid</SelectItem>
                            </SelectContent>
                            </Select>
                        </div>
                    </div>

                </form>
            </CardContent>
        </Card>
        <Card>
            <CardContent>
                <TitleText text='Overview'/>

                <div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className='flex flex-col gap-2'>
                            <Label htmlFor='job-type'>Job Type</Label>
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select Job Type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="remote">Full-Time</SelectItem>
                                    <SelectItem value="hybrid">Contract</SelectItem>
                                </SelectContent>
                            </Select>                       
                        </div>
                        <div className='flex flex-col gap-2'>
                            <Label htmlFor='job-type'>Location</Label>
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select Location" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="remote">Full-Time</SelectItem>
                                    <SelectItem value="hybrid">Contract</SelectItem>
                                </SelectContent>
                            </Select>                       
                        </div>
                        <div className='flex flex-col gap-2'>
                            <Label htmlFor='time-zone'>Time Zone</Label>
                            <Input id="time-zone" type="text" placeholder='Time Zone' required />                 
                        </div>
                        <div className='flex items-center justify-between gap-2'>
                            <div className='flex flex-col gap-2'>
                                <Label htmlFor='time-zone'>Salary Range (From)</Label>
                                <Input id="time-zone" type="text" placeholder='From' required />                 
                            </div>
                            <span>-</span>
                            <div className='flex flex-col gap-2'>
                                <Label htmlFor='time-zone'>Salary Range (To)</Label>
                                <Input id="time-zone" type="text" placeholder='To' required />                 
                            </div>                            
                        </div>
                        <div>
                            <DatePicker
                            title='Start Date'
                            selectedDate={startDate}
                            onChange={setStartDate}
                            />
                        </div>
                        <div>
                            <DatePicker
                            title='End Date'
                            selectedDate={endDate}
                            onChange={setEndDate}
                            />
                        </div>




                        
                    </div>
                </div>                
            </CardContent>

        </Card>

        <Card>
            <CardContent>
                <RichTextEditor value={content} onChange={setContent} />
                <button
                    onClick={handleSave}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Save
                </button>
            </CardContent>
        </Card>



    <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Save Changes</DialogTitle>
            <DialogDescription>
              Confirm that you want to save changes.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <Card>
                <CardContent>
                    <div className="flex justify-between gap-3">
                        <div>
                            <div>
                                <div></div>
                                
                                <div>
                                    <TitleText text='Senior UI Designer'/>
                                    <DescText text='Google'/>
                                </div>                            
                            </div>

                            <div className='flex gap-2'>
                                <StatusPill status='inactive' pillText='Design'/>
                                <StatusPill status='inactive' pillText='Remote'/>
                            </div>

                        </div>
                        <div>
                            <StatusPill pillText='Active' status='active'/>
                        </div>
                        
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <div className="flex items-center gap-3">
                        <Checkbox className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700" id="terms" />
                        <Label htmlFor="terms" className='text-sm font-semibold'>I do not want to receive applications via Africaskillz.</Label>
                    </div>
                </CardContent>
            </Card>
          </div>
          <DialogFooter>
            <div className='w-full flex items-center justify-between'>
                <DialogClose asChild>
                <Button variant="secondary">Cancel</Button>
                </DialogClose>
                <div className='flex items-center gap-2'>
                    <Button variant={'outline'}type="submit">Save to Draft</Button>
                    <Button >Publish</Button>                          
                </div>
          
            </div>

          </DialogFooter>
        </DialogContent>
    </Dialog>
    </PrimaryContainer>
  )
}

export default CreateJob