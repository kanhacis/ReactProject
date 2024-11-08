import React from "react";
import WorkerCard from "./WorkerCard";


const WorkerCardContainer = ({ data }) => {
  return (
    <section className="w-full flex flex-wrap justify-evenly mt-4">
      {data.map((worker, index) => (
        <WorkerCard key={index} worker={worker} index={index} />
      ))}
    </section>
  );
};

export default WorkerCardContainer;
