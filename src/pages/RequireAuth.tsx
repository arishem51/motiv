import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import Loading from "../components/Loading";
import { useAuthStateChanged } from "../services/react-query/hooks/useAuthStateChanged";
import { RouteNames, ROUTES } from "../services/react-router";

const Wrapper = styled.div`
  display: flex;
`;

const Content = styled.div`
  flex: 1;
  background-color: var(--color-white7);
`;

const RequireAuth = () => {
  const navigate = useNavigate();
  const { isLoading } = useAuthStateChanged({
    onAuthError() {
      navigate(RouteNames.SIGN_IN);
    },
  });

  if (isLoading) {
    return <Loading />;
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
