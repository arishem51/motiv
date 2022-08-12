import { Navigate, Outlet } from "react-router-dom";
import Loading from "../components/Loading";
import { useAuth } from "../context/AuthProvider";
import { RouteNames } from "../services/react-router";

const NotRequireAuth = () => {
  const { isLoading, user } = useAuth();

  if (isLoading) {
    return <Loading />;
  }

  if (user) {
    return <Navigate to={RouteNames.DASHBOARD} />;
  }

  return <Outlet />;
};

export default NotRequireAuth;
