import axios from 'axios';


const API_BASE_URL = "http://127.0.0.1:8000";

const filterService = {
  async apply_filter(filters) {   
    console.log(filters);
     
    try {
      const access_token = localStorage.getItem("access_token"); 

      if (access_token) {
        const response = await axios.get(`${API_BASE_URL}/search_workers/${filters}`, {
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

export default filterService;