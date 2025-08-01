export type jobs = {
  id: string
  title: string
  applicants: number
  status: "Active" | "Outdated" | "Draft" 
  date: string
}