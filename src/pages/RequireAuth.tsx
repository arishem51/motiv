import styled from "styled-components";
import { Icons } from "../assets";
import SideBar from "../components/SideBar";
import { SideBarItemProps } from "../components/SideBarItem";

const Wrapper = styled.div`
  display: flex;
`;

const DATA: SideBarItemProps[] = [
  {
    icon: <Icons.Dashboard />,
    title: "Dashboard",
    routeName: "/",
  },
  {
    icon: <Icons.Assets />,
    title: "Assets",
    routeName: "assets",
  },
  {
    icon: <Icons.Car />,
    title: "Booking",
    routeName: "booking",
  },
  {
    icon: <Icons.ShoppingBag />,
    title: "Sell Cars",
    routeName: "sell",
  },
  {
    icon: <Icons.ShoppingCart />,
    title: "Buy Cars",
    routeName: "buy",
  },
  {
    icon: <Icons.Fencing />,
    title: "Services",
    routeName: "services",
  },
  {
    icon: <Icons.Calendar />,
    title: "Calendar",
    routeName: "calendar",
  },
  {
    icon: <Icons.Comment />,
    title: "Messages",
    routeName: "messages",
  },
  {
    icon: <Icons.Settings />,
    title: "Settings",
    routeName: "settings",
  },
  {
    icon: <Icons.SignOut />,
    title: "Log out",
    routeName: "/signOut",
  },
];

const RequireAuth = () => {
  return (
    <Wrapper>
      <SideBar listItem={DATA} />
    </Wrapper>
  );
};

export default RequireAuth;
