import React from "react";
import { MainLayoutProps } from "./type";

const MainLayout: React.FC<MainLayoutProps> = (props) => {
  return <div className="flex lg:flex-col justify-between gap-4"></div>;
};

export default React.memo(MainLayout);
