import api from '../../../lib/api/axios/baseAxios'

export interface JobType{
  id?:string
  payload:{
    "title": string,
    "category": string,
    "status": "active"| 'draft'| 'unpublished'| 'deleted', 
    "startDate": string,
    "endDate": string,
    "location": string,
    "description": string,
    "companyName": string,
    "subCategory": "remote" | 'remote' | 'hybrid' | 'onsite'
    "mode": "full_time" |'part_time' |'contract' |'freelance' |'grant' |'internship'
    "details": {
      "timeZone": string,
      "minAmount": number,
      "courseMaterial":string,
      "maxAmount": number,
      "contactDetails": string,
      "contactWebsite": string
    }    
  }

}

class JobService {
  static async GetJobPost(data: { id: string}) {
    try {

      const res = await api.get(`job/${data.id}`)
      return res.data
    } catch (error: any) {
      console.error("Login failed:", error)
      throw error
    }
  }
  static async GetJobPosts(data:{page:number, location:string, status?:string}) {
    try {

      const res = await api.get(`job?page=${data.page}&limit=10&location=${data.location}`)
      return res.data
    } catch (error: any) {
      console.error("Login failed:", error)
      throw error
    }
  }

  static async CreateJobPost(data: JobType) {
    try {

      const res = await api.post(`job`, data.payload)
      return res.data
    } catch (error: any) {
      console.error("Login failed:", error)
      throw error
    }
  }
  static async EditJobPost(data: JobType) {
    try {

      const res = await api.put(`job/${data.id}`, data.payload)
      return res.data
    } catch (error: any) {
      console.error("Login failed:", error)
      throw error
    }
  }
  static async DeleteJobPost(data: { email: string; password: string }) {
    try {

      const res = await api.post(`v2/admin/supervisor/login`, {
        email: data.email,
        password: data.password,
      })
      return res.data
    } catch (error: any) {
      console.error("Login failed:", error)
      throw error
    }
  }
}

export default JobService