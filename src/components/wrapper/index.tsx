import React, { ReactNode } from "react";
import s from "./styles.module.scss";

export const Wrapper = ({
  children,
  paddingTop,
  centre
}: {
  children: ReactNode;
  paddingTop?: boolean;
  centre?: boolean;
}) => {
  return (
    <div
      className={`${s.wrapper} ${paddingTop ? s.top : ""} ${
        centre ? s.centre : ""
      }`}
    >
      {children}
    </div>
  );
};
