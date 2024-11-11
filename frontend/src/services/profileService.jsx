import axios from 'axios';


const API_BASE_URL = "http://127.0.0.1:8000";

const profileService = {
  async update_profile(data) {
    try {
      const access_token = localStorage.getItem("access_token"); // Fetch dynamically

      if (access_token) {
        const response = await axios.post(`${API_BASE_URL}/profile/`, data, {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        });
        // Set the user role in the local storage        
        localStorage.setItem("role", data.role)
        return response;
      } else {
        return 401;
      }
    } catch (error) {
      throw error;
    }
  },

  async get_profile_data() {
    try {
      const access_token = localStorage.getItem("access_token"); // Fetch dynamically
      if (access_token) {
        const response = await axios.get(`${API_BASE_URL}/profile/`, {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        });
        return response;
      } else {
        return 401;
      }
    } catch (error) {
      throw error;
    }
  }
};

export default profileService;