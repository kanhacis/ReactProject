import React from 'react'

const ProfileCard = ({profileInfo}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-5xl mx-auto flex flex-col md:flex-row md:justify-between md:space-x-6 space-y-6 md:space-y-0">
        {/* User Details */}
        <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-between space-x-6 w-full md:w-1/2">
          <div className="flex-shrink-0 mr-2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&s"
              alt="Profile"
              className="w-32 h-32 md:w-36 md:h-36 rounded-full object-cover border-2 border-gray-300"
            />
          </div>
          <div className="mt-4 md:mt-0 md:ml-6 flex flex-col flex-grow">
            <h3 className="text-lg font-bold text-gray-700">Name: {profileInfo.first_name} {profileInfo.last_name}</h3>
            <p className="text-sm text-gray-600 mt-2">Contact: +91 {profileInfo.phone_number}</p>
            <p className="text-sm text-gray-600 mt-1">Gender: {profileInfo.gender}</p>
            <p className="text-sm text-gray-600 mt-1">Role: {profileInfo.role}</p>
          </div>
        </div>

        {/* User Address */}
        <div className="bg-gray-100 p-4 rounded-lg w-full md:w-1/2">
          <div className="h-full bg-white p-4 rounded-lg shadow-md">
            <h4 className="text-md font-semibold text-gray-700">City: {profileInfo.city}</h4>
            <p className="text-sm text-gray-600 mt-2">
              Address: {profileInfo.location}
            </p>
            <p className="text-sm text-gray-600 mt-2">Longitude: {profileInfo.longitude}</p>
            <p className="text-sm text-gray-600 mt-2">Latitude: {profileInfo.latitude}</p>
          </div>
        </div>
      </div>
  )
}

export default ProfileCard