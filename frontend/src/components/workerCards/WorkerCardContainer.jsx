import React from "react";
import WorkerCard from "./WorkerCard";
import Filters from "../Filters";

const WorkerCardContainer = ({ data, setWorkersData }) => {
  return (
    <section className="worker-card-container w-full mt-4 flex flex-col lg:flex-row gap-5">
      {/* Add Filters component */}
      <Filters setWorkersData={setWorkersData} />

      {/* Worker Cards */}
      <div className="cards-container w-full lg:w-3/4 flex flex-wrap justify-evenly gap-5 overflow-y-auto">
        {data.length > 0 ? (
          <>
            {data.map((worker, index) => (
              <WorkerCard key={index} worker={worker} index={index} />
            ))}
          </>
        ) : (
          <>
            <div className="min-h-[50vh] flex flex-grow items-center justify-center">
              <div className="rounded-lg bg-white p-8 text-center shadow-xl">
                <h1 className="mb-4 text-4xl font-bold">404</h1>
                <p className="text-gray-600">
                  Oops! No records match your filters.
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default WorkerCardContainer;
