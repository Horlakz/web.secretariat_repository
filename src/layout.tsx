import { FC } from "react";

import { Children } from "./interface";

const AppLayout: FC<Children> = ({ children }) => {
  return (
    <div className="min-h-screen max-w-screen-2xl mx-auto">{children}</div>
  );
};

export default AppLayout;
