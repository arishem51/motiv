import { Navigate, Route, Routes } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import Dashboard from "./feature/Dashboard/Dashboard";
import SignIn from "./feature/Onboarding/SignIn";
import SignUp from "./feature/Onboarding/SignUp";
import NotRequireAuth from "./pages/NotRequireAuth";
import RequireAuth from "./pages/RequireAuth";
import { RouteNames } from "./services/react-router";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path={RouteNames.DASHBOARD} element={<RequireAuth />}>
          <Route index element={<Dashboard />} />
          <Route path={RouteNames.ASSETS} element={<div>Assets</div>} />
          <Route path={RouteNames.BOOKING} element={<div>Booking</div>} />
          <Route path={RouteNames.SELL} element={<div>Sell Cars</div>} />
          <Route path={RouteNames.BUY} element={<div>Buy</div>} />
          <Route path={RouteNames.SERVICES} element={<div>Services</div>} />
          <Route path={RouteNames.CALENDAR} element={<div>Calendar</div>} />
          <Route path={RouteNames.MESSAGES} element={<div>Messages</div>} />
          <Route path={RouteNames.SETTINGS} element={<div>Settings</div>} />
        </Route>
        <Route path={RouteNames.DASHBOARD} element={<NotRequireAuth />}>
          <Route path={RouteNames.SIGN_UP} element={<SignUp />} />
          <Route path={RouteNames.SIGN_IN} element={<SignIn />} />
        </Route>
        <Route path="*" element={<Navigate to={RouteNames.DASHBOARD} />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
