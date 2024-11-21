import React, { useState } from "react";
import ProfileCard from "../components/ProfileCard";
import { useEffect } from "react";
import profileService from "../services/profileService";
import WorkingAreaDetails from "../components/WorkingAreaDetails";
import workDetailService from "../services/workDetailService";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  const [profileInfo, setProfileInfo] = useState(0);
  
  const [workDetails, setWorkDetails] = useState();
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/signin/");
    } else if (profileInfo === 0) {
      navigate("/profile/");
    }
  }, [isLoggedIn]);

  const handleProfileData = async () => {
    try {
      const response = await profileService.get_profile_data();
      setProfileInfo(response.data);
    } catch (error) {
      if (error.response.status === 404) {
        console.log(error.message);
      } else {
        toast.error(error.message);
      }
    }
  };

  const handleWorkDetailsData = async () => {
    try {
      const response = await workDetailService.workDetails();
      setWorkDetails(response.data);
    } catch (error) {
      if (error.response.status === 404) {
        console.log(error.message);
      } else {
        toast.error(error.message);
      }
    }
  };

  useEffect(() => {
    handleProfileData();
    handleWorkDetailsData();
  }, []);

  const handleEdit = (item) => {
    alert(`Edit item: ${item.name}`);
  };

  const handleDelete = (id) => {
    alert(`Delete item with ID: ${id}`);
  };

  return (
    <>
      <ToastContainer />
      <section className="mt-10 p-2">
        {profileInfo ? <ProfileCard profileInfo={profileInfo} /> : "?"}

        {workDetails ? (
          <WorkingAreaDetails
            workDetails={workDetails}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ) : (
          "?"
        )}
      </section>
    </>
  );
};

export default Dashboard;
