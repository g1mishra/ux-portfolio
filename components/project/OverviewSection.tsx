import React from "react";

interface OverviewSectionProps {
  overview: Array<string | undefined>;
  role: string;
  research: string;
  timeline: string;
  children?: React.ReactNode;
}

const OverviewSection: React.FC<OverviewSectionProps> = ({
  overview,
  role,
  research,
  timeline,
  children,
}) => {
  return (
    <div id="overview">
      <div className="flex gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0 md:justify-between">
        <div className="flex flex-1 flex-col items-stretch max-md:ml-0 max-md:w-full">
          <div className="flex grow flex-col items-stretch max-md:mt-10 max-md:max-w-full">
            <div className="text-xl font-bold leading-6 text-white max-md:max-w-full">
              Overview
            </div>
            <div className="mt-5 text-xl leading-8 text-whitesmoke-100 text-opacity-60 max-md:mt-10 max-md:max-w-full">
              {overview?.map((item, index) => (
                <p key={index} className="mt-5">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="ml-0 flex flex-1 flex-col items-stretch max-md:w-full md:ml-7">
          <div className="flex flex-col items-stretch max-md:mt-10 md:max-w-sm">
            <div className="text-xl font-medium leading-6 text-white">
              My Role
            </div>
            <div className="mt-10 text-xl font-medium leading-8 text-whitesmoke-100 max-md:mt-10">
              {role}
            </div>
            <div className="mt-5 text-xl leading-8 text-whitesmoke-100 text-opacity-60">
              {research}
            </div>
            <div className="mt-10 text-xl font-medium leading-6 text-white max-md:mt-10">
              Timeline
            </div>
            <div className="mt-5 text-xl leading-8 text-whitesmoke-100 text-opacity-60">
              {timeline}
            </div>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default OverviewSection;
