import { BiCurrentLocation } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SubmitButton from "../components/buttons/SubmitButton";
import addressService from "../services/addressService";
import profileService from "../services/profileService";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { setRole } from "../services/roles/roleSlice";


const Profile = () => {
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
        dispatch(setRole(data.role))
        
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
      } catch (error) {
        if (error.response.status === 404) {
          toast.info(error.message);
        } else {
          toast.error(error.message);
        }
      }
    };

    handleProfileData();
  }, [accessToken]);

  return (
    <>
      <ToastContainer />
      <section className="dark:bg-gray-900 mt-10">
        <div className="container flex flex-col items-center justify-center px-4 sm:px-6 py-8 mx-auto md:h-screen lg:py-0">
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
                    <label
                      htmlFor="first_name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="John"
                      {...register("first_name", {
                        required: "First name is required!",
                      })}
                    />
                    {errors.first_name && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.first_name.message}
                      </p>
                    )}
                  </div>
                  {/* Last Name */}
                  <div>
                    <label
                      htmlFor="last_name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="Doe"
                      {...register("last_name", {
                        required: "Last name is required!",
                      })}
                    />
                    {errors.last_name && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.last_name.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone number */}
                <div>
                  <label
                    htmlFor="phone_number"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phone_number"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="+91 9111715245"
                    {...register("phone_number", {
                      required: "Phone number is required!",
                    })}
                  />
                  {errors.phone_number && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.phone_number.message}
                    </p>
                  )}
                </div>

                {/* Gender */}
                <div>
                  <label
                    htmlFor="gender"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Gender
                  </label>
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
                  <label
                    htmlFor="role"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Role
                  </label>
                  <select
                    id="role"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    {...register("role")}
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
                    <label
                      htmlFor="city"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="Indore"
                      {...register("city", { required: "City is required!" })}
                    />
                    {errors.city && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.city.message}
                      </p>
                    )}
                  </div>
                  {/* Location */}
                  <div>
                    <label
                      htmlFor="location"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Location
                    </label>
                    <input
                      type="text"
                      id="location"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="Vijay nagar scheme no. 78"
                      {...register("location", {
                        required: "Location is required!",
                      })}
                    />
                    {errors.location && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.location.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Longitude and Latitude */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Longitude */}
                  <div>
                    <label
                      htmlFor="longitude"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Longitude
                    </label>
                    <input
                      type="text"
                      id="longitude"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="-73.935242"
                      {...register("longitude", {
                        required: "Longitude is required!",
                      })}
                    />
                    {errors.longitude && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.longitude.message}
                      </p>
                    )}
                  </div>
                  {/* Latitude */}
                  <div>
                    <label
                      htmlFor="latitude"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Latitude
                    </label>
                    <input
                      type="text"
                      id="latitude"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="40.730610"
                      {...register("latitude", {
                        required: "Latitude is required!",
                      })}
                    />
                    {errors.latitude && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.latitude.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <SubmitButton text={"Update Profile"} />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
