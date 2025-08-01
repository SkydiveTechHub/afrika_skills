import { redirect } from 'next/navigation'

const page = () => {
  return (
    redirect(`/dashboard/admin-post`)
  )
}

export default page