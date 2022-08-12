import { Route, Routes } from "react-router-dom";
import SignIn from "./feature/Onboarding/SignIn";
import SignUp from "./feature/Onboarding/SignUp";
import RequireAuth from "./pages/RequireAuth";
import { RouteNames } from "./services/react-router";

function App() {
  return (
    <Routes>
      <Route path={RouteNames.DASHBOARD} element={<RequireAuth />}>
        <Route index element={<div>Dashboard</div>} />
        <Route path={RouteNames.ASSETS} element={<div>Assets</div>} />
        <Route path={RouteNames.BOOKING} element={<div>Booking</div>} />
        <Route path={RouteNames.SELL} element={<div>Sell Cars</div>} />
        <Route path={RouteNames.BUY} element={<div>Buy</div>} />
        <Route path={RouteNames.SERVICES} element={<div>Services</div>} />
        <Route path={RouteNames.CALENDAR} element={<div>Calendar</div>} />
        <Route path={RouteNames.MESSAGES} element={<div>Messages</div>} />
        <Route path={RouteNames.SETTINGS} element={<div>Settings</div>} />
      </Route>
      <Route path={`/${RouteNames.SIGN_UP}`} element={<SignUp />} />
      <Route path={`/${RouteNames.SIGN_IN}`} element={<SignIn />} />
    </Routes>
  );
}

export default App;
