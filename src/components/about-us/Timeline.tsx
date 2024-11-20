import React from "react";
import Images from "../image/Image";
import classNames from "classnames";

interface TimelineItemProps {
  imageSrc: string; // Image source
  period: string;
  bgColor: string; // Background color of the parent container
  description: string; // Description text
}

interface TimelineProps {
  items: TimelineItemProps[];
}

const TimelineItem: React.FC<TimelineProps> = ({ items }) => {
  return (
    <>
      <div className="text-[48px] font-bold leading-[56.25px] tracking-[-0.16px] mt-[60px] mb-[40px] text-center text-navy-900">
        Our history
      </div>
      <div
        className="md:space-y-[-60px] space-y-3 mb-24 overflow-hidden md:mx-32 
                relative"
      >
        {items.map((item, index) => (
          <div
            className="relative flex items-center inset-0 justify-between md:justify-normal md:even:flex-row-reverse group mx-2 sm:mx-10 md:mx-0"
            key={index}
          >
            {items.length - 1 !== index && (
              <div className="absolute top-[50px] translate-x-[49px] md:-translate-x-1/2 md:left-1/2 h-full w-[3px] bg-navy-900"></div>
            )}
            <div
              className={classNames(
                "text-[15px] lg:text-[20px] text-center font-semibold leading-[23.44px] absolute left-3 top-3 translate-x-0 md:left-1/2 md:-translate-x-1/2 md:top-[50px] w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] rounded-full border border-white shadow-md flex items-center justify-center flex-col",
                item.bgColor === "#4362A6" ? "text-gray-50" : "turquoise-600",
              )}
              style={{ backgroundColor: `${item.bgColor}` }}
            >
              <div>{item.period.split(" ")[0]}</div>
              <div>{item.period.split(" ")[1]}</div>
            </div>
            <div
              className={`
                  max-w-full w-[calc(70%)] md:w-[calc(43%)] 
                  lg:max-w-[534px] bg-white p-4 rounded-[32px] border border-slate-200 shadow gap-3 h-full`}
            >
              <Images
                image={item.imageSrc}
                altText="Timeline"
                alignment="center"
                height={10}
                width={534}
              />
              <div className="text-navy-900">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TimelineItem;
