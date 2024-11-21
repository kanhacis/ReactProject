import React from "react";
import { useState, useRef } from "react";
import FilterButton from "./buttons/FilterButton";
import filterService from "../services/filterService";

let filterStr = "";
const Filters = ({ setWorkersData }) => {
  const search = useRef();
  const [genderFilterBtn, setGenderFilterBtn] = useState(["Male", "Female"]);
  const [rateTypeFilterBtn, setRateTypeFilterBtn] = useState(["Full_day", "Half_day", "Per_hour"]);
  const [rate, setRate] = useState([100, 500, 1000, 2000]);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleSearch = (event) => {
    event.preventDefault();
    const currSearch = search.current.value;

    if (!filterStr) {
      filterStr += `?working_area_name=${currSearch}`;
    } else {
      filterStr += `&working_area_name=${currSearch}`;
    }

    // Call function to apply filters and get response
    applyFilters(filterStr);
  };

  const applyFilters = async (filterStr) => {
    const response = await filterService.apply_filter(filterStr);
    // Set the new workers
    setWorkersData(response.data);
  };

  const generateFilterStr = async (filters) => {
    try {
      filterStr = "";
      filters.map((item) => {
        if (item === "Full_day" || item === "Half_day" || item === "Per_hour") {
          if (!filterStr) {
            filterStr += `?rate_type=${item}`;
          } else {
            filterStr += `&rate_type=${item}`;
          }
        } else if (item === "Male" || item === "Female") {
          if (!filterStr) {
            filterStr += `?gender=${item}`;
          } else {
            filterStr += `&gender=${item}`;
          }
        } else if (
          item === 100 ||
          item === 500 ||
          item === 1000 ||
          item === 2000
        ) {
          if (!filterStr) {
            filterStr += `?max_rate=${item}`;
          } else {
            filterStr += `&max_rate=${item}`;
          }
        }
      });
      // Call function to apply filters and get response
      applyFilters(filterStr);
      return 0;
    } catch (error) {
      console.log(error);
      return 0;
    }
  };

  const handleFilter = (filter) => {
    // Identify the category of the selected filter
    const isGender = filter === "Male" || filter === "Female";
    const isRateType =
      filter === "Full_day" || filter === "Half_day" || filter === "Per_hour";
    const isRate = typeof filter === "number";

    setSelectedFilters((prevFilters) => {
      let updatedFilters;

      // If the filter is already selected, remove it (toggle off)
      if (prevFilters.includes(filter)) {
        updatedFilters = prevFilters.filter((f) => f !== filter);
      } else {
        // Clear other filters in the same category and add the new filter
        if (isGender) {
          updatedFilters = [
            ...prevFilters.filter((f) => !(f === "Male" || f === "Female")),
            filter,
          ];
        } else if (isRateType) {
          updatedFilters = [
            ...prevFilters.filter(
              (f) => !(f === "Full_day" || f === "Half_day" || f === "Per_hour")
            ),
            filter,
          ];
        } else if (isRate) {
          updatedFilters = [
            ...prevFilters.filter((f) => typeof f !== "number"),
            filter,
          ];
        } else {
          updatedFilters = [...prevFilters]; // No specific category match
        }
      }

      // Generate the updated filter string
      generateFilterStr(updatedFilters);

      return updatedFilters;
    });
  };

  return (
    <div className="filter-container w-full lg:w-1/4 sticky top-10 self-start bg-gray-100 p-4 border border-gray-300 rounded-lg bg-white">
      {/* Add your filters and searches here */}
      <h2 className="text-lg font-bold mb-4">Apply Filters</h2>

      <form className="flex items-center max-w-sm mb-3" onSubmit={handleSearch}>
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <input
            type="search"
            ref={search}
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full ps-3 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
            placeholder="Electrician, plumber etc.."
            required
          />
        </div>
        <button
          type="submit"
          className="p-2.5 ms-2 text-sm font-medium text-white bg-indigo-600 rounded-lg border border-indigo-700 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-700"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </form>
      <h5 className="text-m font-bold mb-2">Gendre</h5>
      <ul className="flex flex-row justify-start flex-wrap gap-2">
        {genderFilterBtn.map((genderName, index) => (
          <li className="rounded-md" key={index}>
            <FilterButton
              text={genderName}
              onClick={() => handleFilter(genderName)}
              color={selectedFilters.includes(genderName) ? "active" : ""}
            />
          </li>
        ))}
      </ul>

      <h5 className="text-m font-bold mb-2 mt-3">Rate Types</h5>
      <ul className="flex flex-row justify-start flex-wrap gap-2">
        {rateTypeFilterBtn.map((rateType, index) => (
          <li className="rounded-md" key={index}>
            <FilterButton
              text={rateType.split("_").join(" ").replace("d", "D").replace("h", "H")}
              onClick={() => handleFilter(rateType)}
              color={selectedFilters.includes(rateType) ? "active" : ""}
            />
          </li>
        ))}
      </ul>

      <h5 className="text-m font-bold mb-2 mt-3">Rates</h5>
      <ul className="flex flex-row justify-start flex-wrap gap-2">
        {rate.map((rateName, index) => (
          <li className="rounded-md" key={index}>
            <FilterButton
              text={rateName}
              onClick={() => handleFilter(rateName)}
              color={selectedFilters.includes(rateName) ? "active" : ""}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filters;
