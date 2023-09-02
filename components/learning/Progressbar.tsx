import React from "react";
interface ProgressBarProps {
  value: number;
}

const ProgressBar = ({ value }: ProgressBarProps) => {
  return (
    <div className="relative pt-1">
      <div className="flex mb-2 items-center justify-between">
        <div>
          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
            In Progress
          </span>
        </div>
        <div className="text-right">
          <span className="text-xs font-semibold inline-block text-teal-600">
            {`${value}%`}
          </span>
        </div>
      </div>
      <div className="relative w-full h-5 border border-slate-900  bg-teal-200 rounded-full">
        <div
          className="absolute h-5 border border-slate-900 bg-teal-500 rounded-full"
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
