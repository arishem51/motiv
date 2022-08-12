import { Navigate, Outlet } from "react-router-dom";
import styled from "styled-components";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import Loading from "../components/Loading";
import { RouteNames, ROUTES } from "../services/react-router";
import { useAuth } from "../context/AuthProvider";

const Wrapper = styled.div`
  display: flex;
`;

const Content = styled.div`
  flex: 1;
  background-color: var(--color-white7);
`;

const RequireAuth = () => {
  const { isLoading, user } = useAuth();

  if (isLoading) {
    return <Loading />;
  }

  if (!isLoading && !user) {
    return <Navigate to={RouteNames.SIGN_IN} />;
  }

  return (
    <Wrapper>
      <SideBar listItem={ROUTES} />
      <Content>
        <TopBar />
        <Outlet />
      </Content>
    </Wrapper>
  );
};

export default RequireAuth;
