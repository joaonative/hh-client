import { ReactNode } from "react";

function GridContainer({ children }: { children: ReactNode }) {
  return (
    <div className="w-full grid lg:grid-cols-3 gap-3 grid-rows-3">
      {children}
    </div>
  );
}

export default GridContainer;
