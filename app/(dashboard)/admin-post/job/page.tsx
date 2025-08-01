'use client'

import { DataTable } from '@/components/DataTable'
import { jobs } from '@/lib/types'
import { ColumnDef } from '@tanstack/react-table'
import React, { useEffect, useState } from 'react'
import {
  DropdownMenu,
  // DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '@/components/ui/button'
import { MoreHorizontal, Plus } from 'lucide-react'
import { PrimaryContainer } from '@/components/Containers'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import { DescText, TitleText } from '@/components/Typo'
import Link from 'next/link'

const Job = () => {
  const [tableData, setTableData] = useState([])
  const columns: ColumnDef<jobs>[] = [
    {
      accessorKey: "title",
      header: "Job Title",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("status")}</div>
      ),
    },
    {
      accessorKey: "date",
      header: 'Date',
      cell: ({ row }) => <div className="lowercase">{row.getValue("date")}</div>,
    },
    {
      accessorKey: "amount",
      header: () => <div className="text-right">Amount</div>,
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue("amount"))

        // Format the amount as a dollar amount
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(amount)

        return <div className="text-right font-medium">{formatted}</div>
      },
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const payment = row.original

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(payment.id)}
              >
                Copy payment ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View customer</DropdownMenuItem>
              <DropdownMenuItem>View payment details</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
    },
  ]

  useEffect(()=>{
    setTableData([])
  },[])

  const JobEmptyState = () =>{
    return(
      <Card className='w-[250px] mx-auto'>
        <CardContent className='space-y-6 flex flex-col justify-center items-center'>
          <Image
            src='/icons/clock.svg'
            width={100}
            height={100}
            alt='empty'
          />

          <div className='w-full  flex flex-col justify-center items-center'>
            <TitleText style='text-[20px]' text='Create Job Post'/>
            <DescText style='text-center text-[14px]' text='Get started with job posting and'/>
            <DescText style='text-center text-[14px]' text='management.'/>
          </div>

          <Link href={'/admin-post/job/create-job'}><Button>Create Post <Plus/></Button></Link>          
        </CardContent>

      </Card>
    )
  }
  return (
    <PrimaryContainer>
        <DataTable
            columns={columns}
            data={tableData}
            emptyState={<JobEmptyState/>}
        />
    </PrimaryContainer>
  )
}

export default Job