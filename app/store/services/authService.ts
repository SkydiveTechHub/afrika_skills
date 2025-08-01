import { AxiosError } from 'axios';
import api from '../../../lib/api/axios/baseAxios'

class AuthService {
  static async Login(data: { email: string; password: string }) {
    try {
      // Set login mode if not already set
      if (!localStorage.getItem("login_mode")) {
        localStorage.setItem("login_mode", "user_admin")
      }

      // Make API request
      const res = await api.post(`/auth/login`, {
        email: data.email,
        password: data.password,
      })

      // Store the response in localStorage
      localStorage.setItem("current_user", JSON.stringify(res.data))

      // Return response data
      return res.data
      return res.data
    } catch (error) {
      const err = error as AxiosError<{ message?: string }>;
      console.error("Login failed:", err.response?.data?.message ?? err.message);
      throw err;
    }
  }
}

export default AuthService
