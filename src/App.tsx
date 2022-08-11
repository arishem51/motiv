import { Route, Routes } from "react-router-dom";
import SignIn from "./feature/Onboarding/SignIn";
import SignUp from "./feature/Onboarding/SignUp";
import RequireAuth from "./pages/RequireAuth";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RequireAuth />}>
        <Route index element={<div>Dashboard</div>} />
        <Route path="assets" element={<div>Assets</div>} />
        <Route path="booking" element={<div>Booking</div>} />
        <Route path="sell" element={<div>Sell Cars</div>} />
        <Route path="buy" element={<div>Buy</div>} />
        <Route path="services" element={<div>Services</div>} />
        <Route path="calendar" element={<div>Calendar</div>} />
        <Route path="messages" element={<div>Messages</div>} />
        <Route path="settings" element={<div>Settings</div>} />
      </Route>
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/SignUp" element={<SignUp />} />
    </Routes>
  );
}

export default App;
