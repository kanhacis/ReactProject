import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import WorkerCardContainer from "../components/workerCards/WorkerCardContainer";
import workerService from "../services/workerService";
import useAuth from "../hooks/useAuth";
import Loader from "../components/Loader";


const FindWorker = () => {
  const [workersData, setWorkersData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/signin/");
    }
  }, [isLoggedIn]);

  useEffect(() => {
    const source = axios.CancelToken.source();

    const fetchWorkers = async () => {
      try {
        setLoading(true);
        const response = await workerService.workers();
        setWorkersData(response.data);
        setError(null);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false); 
      }
    };

    fetchWorkers();

    return () => {
      source.cancel("Component unmounted, request canceled");
    };
  }, []);

  return (
    <div className={`min-h-screen bg-gray-100 p-4 ${loading ? "flex justify-center items-center" : ""}`}>
    {loading ? (
      <Loader />
    ) : (
      <WorkerCardContainer data={workersData} />
    )}
  </div>
  );
  
};

export default FindWorker;
