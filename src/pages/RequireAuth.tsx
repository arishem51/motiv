import { Navigate, Outlet } from "react-router-dom";
import styled from "styled-components";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import Loading from "../components/Loading";
import { RouteNames, ROUTES } from "../services/react-router";
import { useAuth } from "../context/AuthProvider";
import { firebaseDB } from "..";

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

  if (!user) {
    return <Navigate to={RouteNames.SIGN_IN} />;
  }

  return (
    <Wrapper>
      <SideBar listItem={ROUTES} />
      <Content>
        <TopBar firebase={firebaseDB} />
        <Outlet />
      </Content>
    </Wrapper>
  );
};

export default RequireAuth;
