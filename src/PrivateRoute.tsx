import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AtuhContext";

interface PrivateRouteProps {
  redirectPath: string;
  children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  redirectPath,
  children,
}) => {
  const auth = useAuth();

  return auth.isLoggedIn ? children : <Navigate to={redirectPath} replace />;
};

export default PrivateRoute;
