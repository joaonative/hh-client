import { ReactNode } from "react";

function GridContainer({ children }: { children: ReactNode }) {
  return (
    <div className="w-full grid gri-cols-1 lg:grid-cols-3 gap-3">
      {children}
    </div>
  );
}

export default GridContainer;
