import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000";
const token = localStorage.getItem("access_token");

const workerService = {
    async workers() {
        try {
            const response = await axios.get(`${API_BASE_URL}/search_workers/`, {
                headers: {
                    Authorization: `Bearer ${token}`, 
                }
            });
            return response;
        } catch (error) {
            throw error;
        }
    }
}

export default workerService;
