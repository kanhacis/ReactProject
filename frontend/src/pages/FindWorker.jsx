import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import WorkerCardContainer from "../components/workerCards/WorkerCardContainer";
import workerService from "../services/workerService";
import useAuth from "../hooks/useAuth";
import Loader from "../components/Loader";
import { useSelector, useDispatch } from "react-redux";
import { selectUserRole } from "../services/roles/roleSelector";
import Pagination from "../components/Pagination";
import { setRole } from "../services/roles/roleSlice";


const FindWorker = () => {
  const [workersData, setWorkersData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const role = localStorage.getItem("role")

  useDispatch(setRole(role));
  
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/signin/");
    }

    if (role === "Worker"){
      navigate("/dashboard")
    }
  }, [isLoggedIn, role]);

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
    <div
      className={`bg-gray-100 p-4 ${
        loading ? "flex justify-center items-center" : ""
      }`}
    >
      {loading ? (
        <Loader />
      ) : (
        <WorkerCardContainer
          data={workersData}
          setWorkersData={setWorkersData}
        />
      )}

      {/* Pagination Component */}
      {/* <Pagination /> */}
    </div>
  );
};

export default FindWorker;
