import React from "react";
import Skeleton from "./Skeleton";

const LoadingSkeleton = () => {
  return (
    < >
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className="col-span-1">
          <Skeleton />
        </div>
      ))}
    </>
  );
};

export default LoadingSkeleton;
