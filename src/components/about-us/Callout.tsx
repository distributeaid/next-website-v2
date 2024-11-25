import React, { FC } from "react";
import { Callout } from "@radix-ui/themes";

interface ICallOutText {
  color:
    | "ruby"
    | "gray"
    | "gold"
    | "bronze"
    | "brown"
    | "yellow"
    | "amber"
    | "orange"
    | "tomato"
    | "red"
    | "crimson"
    | "pink"
    | "plum"
    | "purple"
    | "violet"
    | "iris"
    | "indigo"
    | "blue"
    | "cyan"
    | "teal"
    | "jade"
    | "green"
    | "grass"
    | "bronze"
    | undefined;
  message: string;
}

export const CallOutText: FC<ICallOutText> = ({ color, message }) => {
  return (
    <Callout.Root className="bg-[var(--green-9)] rounded-none" color={color}>
      <Callout.Text>{message}</Callout.Text>
    </Callout.Root>
  );
};
