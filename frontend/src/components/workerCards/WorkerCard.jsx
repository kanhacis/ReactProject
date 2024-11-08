import React, { useState } from "react";
import WorkInfo from "./WorkInfo";
import WorkerDetail from "./WorkerDetail";
import WrokInfoModal from "./WrokInfoModal";

const WorkerCard = ({ index, worker }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div
      key={index}
      className="w-full sm:w-[48%] md:w-[32%] lg:w-[30%] xl:w-[23%] min-w-[380px] border border-gray-300 rounded-lg p-4 mb-4 bg-white"
    >
      {/* Profile Section */}
      <WorkerDetail worker={worker} />

      {/* Working Area Information Section */}
      <div className="working_info border-t border-gray-300 pt-2">
        <WorkInfo work={worker.working_areas[0]} idx={0} />

        <div className="float-right">
          <p
            className="text-sm text-gray-600 font-medium underline cursor-pointer"
            onClick={() => setShowMore(true)}
          >
            {showMore ? "" : "Show more"}
          </p>
        </div>
      </div>

      {/* Modal for Showing More Work Info */}
      <WrokInfoModal isOpen={showMore}>
        <div className="flex justify-between">
          <h2 className="text-lg font-semibold mb-4">Work Information</h2>
          <p role="button" onClick={() => setShowMore(false)}>
            ✘
          </p>
        </div>
        {worker.working_areas.map((work, idx) => (
          <WorkInfo key={idx} work={work} idx={idx} />
        ))}
      </WrokInfoModal>
    </div>
  );
};

export default WorkerCard;
