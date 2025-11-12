import React from "react";

interface LoadingProps {
  message?: string;
  className?: string;
}

export const Loading: React.FC<LoadingProps> = ({
  message = "Loading...",
  className = "",
}) => {
  return (
    <div className={`flex justify-center items-center py-20 ${className}`}>
      <div className="text-xl text-gray-500">{message}</div>
    </div>
  );
};
