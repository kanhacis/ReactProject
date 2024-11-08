import axios from "axios";


const API_BASE_URL = "http://127.0.0.1:8000";

const contactService = {
  async contact(data) {
    try {
      const response = await axios.post(`${API_BASE_URL}/contact/`, data);
      return response;
    } catch (error) {
      throw error;
    }
  },
};

export default contactService;
