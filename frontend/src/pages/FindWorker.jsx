import React, { useEffect, useState } from "react";
import axios from "axios";
import WorkerCardContainer from "../components/workerCards/WorkerCardContainer";
import workerService from "../services/workerService";


const FindWorker = () => {
  const [workersData, setWorkersData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const source = axios.CancelToken.source();

    const fetchWorkers = async () => {
      try {
        setLoading(true);
        const response = await workerService.workers();
        setWorkersData(response.data); 
        setError(null); 
      } catch (error) {
        if (error.response.status === 401) {
          
        } 
        
        if (axios.isCancel(error)) {
          console.log("Request canceled:", error.message);
        } else {
          console.error("Error fetching workers:", error);
          setError("Failed to load workers. Please try again.");
        }
      } finally {
        setLoading(false); // End loading state whether request succeeds or fails
      }
    };

    fetchWorkers();

    // Cleanup function to cancel the request if the component unmounts
    return () => {
      source.cancel("Component unmounted, request canceled");
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {loading ? "Loading..." : <WorkerCardContainer data={workersData} />}
    </div>
  );
};

export default FindWorker;