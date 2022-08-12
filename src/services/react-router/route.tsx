import { SideBarItemProps } from "../../components/SideBarItem";
import { Icons } from "../../assets/index";

export const RouteNames = {
  DASHBOARD: "/",
  ASSETS: "assets",
  BOOKING: "booking",
  SELL: "sell",
  BUY: "buy",
  SERVICES: "services",
  MESSAGES: "messages",
  CALENDAR: "calendar",
  SETTINGS: "settings",
  SIGN_OUT: "signout",
  SIGN_UP: "SignUp",
  SIGN_IN: "SignIn",
} as const;

export const ROUTES: SideBarItemProps[] = [
  {
    icon: <Icons.Dashboard />,
    title: "Dashboard",
    routeName: RouteNames.DASHBOARD,
  },
  {
    icon: <Icons.Assets />,
    title: "Assets",
    routeName: RouteNames.ASSETS,
  },
  {
    icon: <Icons.Car />,
    title: "Booking",
    routeName: RouteNames.BOOKING,
  },
  {
    icon: <Icons.ShoppingBag />,
    title: "Sell Cars",
    routeName: RouteNames.SELL,
  },
  {
    icon: <Icons.ShoppingCart />,
    title: "Buy Cars",
    routeName: RouteNames.BUY,
  },
  {
    icon: <Icons.Fencing />,
    title: "Services",
    routeName: RouteNames.SERVICES,
  },
  {
    icon: <Icons.Calendar />,
    title: "Calendar",
    routeName: RouteNames.CALENDAR,
  },
  {
    icon: <Icons.Comment />,
    title: "Messages",
    routeName: RouteNames.MESSAGES,
  },
  {
    icon: <Icons.Settings />,
    title: "Settings",
    routeName: RouteNames.SETTINGS,
  },
  {
    icon: <Icons.SignOut />,
    title: "Log out",
    routeName: RouteNames.SIGN_OUT,
  },
];
