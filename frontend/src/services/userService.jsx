import axios from "axios";


const API_BASE_URL = "http://127.0.0.1:8000";

const userService = {
  async signup(data) {
    try {
      const response = await axios.post(`${API_BASE_URL}/user/`, data);
      return response;
    } catch (error) {
      throw error;
    }
  },
};

export default userService;
