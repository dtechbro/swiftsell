import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import LandingPage from "@/pages/LandingPage";
import DashboardPage from "@/pages/dashboard/DashboardPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route
          path="/dashboard"
          element={<DashboardPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};
