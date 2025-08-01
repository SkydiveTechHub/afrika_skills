"use client"

import * as React from "react"
import { CalendarIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

function formatDate(date: Date | undefined) {
  if (!date) {
    return ""
  }

  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })
}

function isValidDate(date: Date | undefined) {
  if (!date) {
    return false
  }
  return !isNaN(date.getTime())
}


export function DatePicker({
  selectedDate,
  title,
  onChange,
}: {
  selectedDate?: Date
  title: string
  onChange?: (date: Date | undefined) => void
}) {
  // Use selectedDate as initial value if provided
  const initialDate = selectedDate ?? new Date("2025-06-01")
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState<Date | undefined>(initialDate)
  const [month, setMonth] = React.useState<Date | undefined>(initialDate)
  const [value, setValue] = React.useState(formatDate(initialDate))

  // Keep input value in sync if selectedDate changes from outside
  React.useEffect(() => {
    if (selectedDate && isValidDate(selectedDate)) {
      setDate(selectedDate)
      setMonth(selectedDate)
      setValue(formatDate(selectedDate))
    }
  }, [selectedDate])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    const parsedDate = new Date(e.target.value)
    if (isValidDate(parsedDate)) {
      setDate(parsedDate)
      setMonth(parsedDate)
      if (onChange) onChange(parsedDate)
    } else {
      setDate(undefined)
      setMonth(undefined)
      if (onChange) onChange(undefined)
    }
  }

  const handleCalendarSelect = (selected: Date | undefined) => {
    setDate(selected)
    setValue(formatDate(selected))
    setOpen(false)
    if (selected) setMonth(selected)
    if (onChange) onChange(selected)
  }

  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor="date" className="px-1">
        {title}
      </Label>
      <div className="relative flex gap-2">
        <Input
          id="date"
          value={value}
          placeholder="June 01, 2025"
          className="bg-background pr-10"
          onChange={handleInputChange}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              e.preventDefault()
              setOpen(true)
            }
          }}
        />
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              id="date-picker"
              variant="ghost"
              className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
            >
              <CalendarIcon className="size-3.5" />
              <span className="sr-only">Select date</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="w-auto overflow-hidden p-0"
            align="end"
            alignOffset={-8}
            sideOffset={10}
          >
            <Calendar
              mode="single"
              selected={date}
              captionLayout="dropdown"
              month={month}
              onMonthChange={setMonth}
              onSelect={handleCalendarSelect}
             />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}
