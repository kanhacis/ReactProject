import { BiCurrentLocation } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import SubmitButton from "../components/buttons/SubmitButton";
import addressService from "../services/addressService";
import profileService from "../services/profileService";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { setRole } from "../services/roles/roleSlice";
import { selectUserRole } from "../services/roles/roleSelector";
import WorkingAreaInfo from "../components/WorkingAreaInfo";
import Label from "../components/Label";


const Profile = () => {
  const [newRole, setNewRole] = useState();
  const currRole = useSelector(selectUserRole);  
  
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await profileService.update_profile(data);
      if (response.status === 201 || response.status === 200) {
        toast.success(response.data.detail);
        dispatch(setRole(data.role));
        localStorage.setItem("role", data.role);
      } else if (response === 401) {
        toast.warning("User not authorized");
      }
    } catch (error) {
      toast.error(error.response.data.detail);
    }
  };

  const handleFetchLocation = async () => {
    try {
      const response = await addressService.get_address();
      if (response.status === 200) {
        const data = response.data;
        setValue("city", data.city || "");
        setValue("location", data.location || "");
        setValue("longitude", data.longitude || "");
        setValue("latitude", data.latitude || "");
      }
    } catch (error) {
      toast.error(error);
    }
  };

  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("access_token")
  );
  const navigate = useNavigate();

  useEffect(() => {
    const handleProfileData = async () => {
      try {
        if (!accessToken) {
          navigate("/signin");
          return;
        }

        const response = await profileService.get_profile_data();

        setValue("first_name", response.data.first_name);
        setValue("last_name", response.data.last_name);
        setValue("phone_number", response.data.phone_number);
        setValue("gender", response.data.gender);
        setValue("role", response.data.role);
        setValue("city", response.data.city);
        setValue("location", response.data.location);
        setValue("longitude", response.data.longitude);
        setValue("latitude", response.data.latitude);
        setNewRole(response.data.role);
        dispatch(setRole(response.data.role));
      } catch (error) {
        if (error.response.status === 404) {
          console.log(error.message);
        } else {
          toast.error(error.message);
        }
      }
    };

    handleProfileData();
  }, [accessToken]);

  const handleRoleChange = (selectedRole) => {
    setNewRole(selectedRole);
  };

  return (
    <>
      <ToastContainer />
      <section className="dark:bg-gray-900 mt-10">
        <div className="h-[87vh] flex justify-center items-center">
          <div className="w-full sm:w-3/4 md:w-3/4 lg:w-3/4 xl:w-1/2 bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mb-4">
                Profile Information
              </h1>
              <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* First Name */}
                  <div>
                    <Label labelName={"First Name"} errors={errors.first_name} />
                    <input
                      type="text"
                      id="first_name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="John"
                      {...register("first_name", {
                        required: "REQUIRED",
                      })}
                    />
                  </div>
                  {/* Last Name */}
                  <div>
                    <Label labelName={"Last Name"} errors={errors.last_name} />
                    <input
                      type="text"
                      id="last_name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="Doe"
                      {...register("last_name", {
                        required: "REQUIRED",
                      })}
                    />
                  </div>
                </div>

                {/* Phone number */}
                <div>
                  <Label labelName={"Phone Number"} errors={errors.phone_number} />
                  <input
                    type="text"
                    id="phone_number"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="+91 9111715245"
                    {...register("phone_number", {
                      required: "REQUIRED",
                    })}
                  />
                </div>

                {/* Gender */}
                <div>
                  <Label labelName={"Gender"} />
                  <select
                    id="gender"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    {...register("gender")}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Role */}
                <div>
                  <Label labelName={"Role"} />
                  <select
                    id="role"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    {...register("role")}
                    onChange={(e) => handleRoleChange(e.target.value)}
                  >
                    <option value="User">User</option>
                    <option value="Worker">Worker</option>
                  </select>
                </div>

                {/* Fetch Location Button */}
                <div className="fetchLocationBtn text-center">
                  <BiCurrentLocation
                    onClick={handleFetchLocation}
                    size={30}
                    className="cursor-pointer inline-block"
                    title="Click to fetch location"
                  />
                </div>

                {/* Location Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* City */}
                  <div>
                    <Label labelName={"City"} errors={errors.city} />
                    <input
                      type="text"
                      id="city"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="Indore"
                      {...register("city", { required: "REQUIRED" })}
                    />
                  </div>
                  {/* Location */}
                  <div>
                    <Label labelName={"Location"} errors={errors.location} />
                    <input
                      type="text"
                      id="location"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="Vijay nagar scheme no. 78"
                      {...register("location", {
                        required: "REQUIRED",
                      })}
                    />
                  </div>
                </div>

                {/* Longitude and Latitude */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Longitude */}
                  <div>
                    <Label labelName={"Longitude"} errors={errors.longitude} />
                    <input
                      type="text"
                      id="longitude"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="-73.935242"
                      {...register("longitude", {
                        required: "REQUIRED",
                      })}
                    />
                  </div>
                  {/* Latitude */}
                  <div>
                    <Label labelName={"Latitude"} errors={errors.latitude} />
                    <input
                      type="text"
                      id="latitude"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="40.730610"
                      {...register("latitude", {
                        required: "REQUIRED",
                      })}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <SubmitButton text={"Update Profile"} />
              </form>
            </div>
          </div>
        </div>

        {newRole === "Worker" && (
          <>
          <WorkingAreaInfo  />
          </>
        )}
      </section>
    </>
  );
};

export default Profile;

// 346