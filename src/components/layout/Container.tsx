import { ReactNode } from "react";

function Container({ children }: { children: ReactNode }) {
  return (
    <div className="container lg:pt-8 pt-20 lg:pl-36 lg:pr-10 pr-2 pl-2">
      {children}
    </div>
  );
}

export default Container;
