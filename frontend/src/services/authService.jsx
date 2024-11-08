import axios from 'axios'


const API_BASE_URL = "http://127.0.0.1:8000";

const authService = {
  async login(data) {
    try {
        const response = await axios.post(`${API_BASE_URL}/login/`, data);
        return response;
    } catch (error) {
        throw error;
    }
  } 
}

export default authService;