import axios from 'axios'


const API_BASE_URL = "http://127.0.0.1:8000";

const addressService = {
  async get_address() {
    try {
        const response = await axios.get(`${API_BASE_URL}/get_address/`);
        return response;
    } catch (error) {
        throw error;
    }
  } 
}

export default addressService;