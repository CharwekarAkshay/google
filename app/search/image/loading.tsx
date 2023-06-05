import React from "react";

const Loading = () => {
  const noOfSkeleton = 10;
  const skeletons = Array.from({ length: noOfSkeleton }, (_, i) => i);
  return (
    <div className="pt-10  mx-2 lg:pl-52 max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {skeletons.map((_, i) => (
        <div key={i} className="animate-pluse">
          <div className="h-48 w-48 mb-4 bg-gray-200 rounded-md"></div>
          <div className="h-2 w-48 mb-2.5 bg-gray-200 rounded-md"></div>
          <div className="h-2 w-44 mb-2.5 bg-gray-200 rounded-md"></div>
        </div>
      ))}
    </div>
  );
};

export default Loading;
