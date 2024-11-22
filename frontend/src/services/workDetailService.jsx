import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000";

const workDetailService = {
  async getWorkDetails() {
    const token = localStorage.getItem("access_token");

    try {
      const response = await axios.get(`${API_BASE_URL}/working_area_info/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response;
    } catch (error) {
      throw error;
    }
  },

  async deleteWorkDetail(id) {
    try {
      const response = await axios.delete(`${API_BASE_URL}/working_area_info/${id}`)
      return response
    } catch (error) {
      throw error
    }
  }
};
 
export default workDetailService;
