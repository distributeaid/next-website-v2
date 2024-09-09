"use client";
import currencyFormatter from "@/utils/currencyFormatter";
import { FC } from "react";
import Button from "../ui/Button";
import cx from "classnames";
import { DIRECTION } from "@/data/constants";

const Card: FC<{
  title: string;
  percentage: number;
  goal_price: number;
  more_link: string;
  donate_link: string;
  position: DIRECTION;
}> = ({
  title,
  percentage,
  goal_price,
  more_link,
  donate_link,
  position = DIRECTION.LEFT,
}) => {
  return (
    <div
      className={cx("py-6 px-4", {
        "border-l-4 border-l border-l-navy-300 text-left":
          position === DIRECTION.LEFT,
        "border-r-4 border-r border-r-navy-300 text-end":
          position === DIRECTION.RIGHT,
      })}
    >
      <h1 className="font-bold uppercase text-[30px] sm:text-[48px] text-navy-700 leading-none">
        {title}
      </h1>

      <div
        className={cx("flex items-center gap-x-2 my-2", {
          "flex-row": position === DIRECTION.LEFT,
          "flex-row-reverse": position === DIRECTION.RIGHT,
        })}
      >
        <div className="w-full bg-navy-400 p-1 h-[36px] flex items-center space-x-2">
          <div
            style={{ width: `${percentage}%` }}
            className="bg-navy-900 h-full"
          >
            -
          </div>
          <p className="font-medium text-navy-900 ml-2">{percentage}%</p>
        </div>
        <p className="text-navy-700 font-medium whitespace-nowrap">
          GOAL: {currencyFormatter(goal_price)}
        </p>
      </div>

      <div
        className={cx("flex items-center space-x-4 py-2", {
          "justify-start": position === DIRECTION.LEFT,
          "justify-end": position === DIRECTION.RIGHT,
        })}
      >
        <Button variant="primary">
          <a href={donate_link} target="_blank">
            Donate Now
          </a>
        </Button>
        <Button>
          <a href={more_link} target="_blank">
            {position === DIRECTION.RIGHT && <span>🢐</span>}{" "}
            <span>More Info</span>{" "}
            {position === DIRECTION.LEFT && <span>🢒</span>}
          </a>
        </Button>
      </div>
    </div>
  );
};

export default Card;
