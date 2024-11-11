import axios from "axios";


const API_BASE_URL = "http://127.0.0.1:8000";

const switchRoleService = {
  async switchRole() {
    const access_token = localStorage.getItem("access_token");
    try {
      const response = await axios.put(`${API_BASE_URL}/switch_role/`, {}, {
        headers: {
            Authorization: `Bearer ${access_token}`,
          },
      });

      // update the localstorage 
      const currRole = response.data.detail.split(" ")[2];
      localStorage.setItem("role", currRole);
      
      return response;
    } catch (error) {
      throw error;
    }
  },
};

export default switchRoleService;
