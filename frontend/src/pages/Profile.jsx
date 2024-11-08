import SubmitButton from "../components/buttons/SubmitButton";


const Profile = () => {
  return (
    <>
      <section className="dark:bg-gray-900">
        <div className="container flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mb-4">
                Profile Information
              </h1>
              <form className="space-y-4">
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
                    />
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
                    />
                  </div>
                </div>

                {/* Gender */}
                <div>
                  <label
                    htmlFor="gender"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Gender
                  </label>
                  <input
                    type="text"
                    id="gender"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="e.g., Male, Female"
                  />
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
                  >
                    <option value="User">User</option>
                    <option value="Worker">Worker</option>
                  </select>
                </div>

                {/* Fetch User Location Button */}
                <button
                  type="button"
                  className="mb-2 text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Fetch User Location
                </button>

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
                      placeholder="e.g., New York"
                    />
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
                      placeholder="e.g., Manhattan"
                    />
                  </div>
                </div>

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
                      placeholder="e.g., -73.935242"
                    />
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
                      placeholder="e.g., 40.730610"
                    />
                  </div>
                </div>

                {/* Include button component */}
                <SubmitButton text={"Submit Profile"} />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
