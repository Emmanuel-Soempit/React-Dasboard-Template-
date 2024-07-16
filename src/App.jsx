import { lazy, Suspense, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import FallBack from "./components/shared/Fallback";

//Lazy imports of pages
const Login = lazy(() => import("./pages/Login"));
const Registration = lazy(() => import("./pages/Registration"));
const NotFound = lazy(() => import("./pages/404"));

//Lazy imports of routes
const DashboardRoutes = lazy(() => import("./routes/useDashboardRoute"));

function App() {
  return (
    <Suspense fallback={<FallBack />}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="*" element={<NotFound />} />

          {/* Dashboard Routes using the dashboard hook */}
          {/* Other Routes can go here using thier hook e.g adminDashboardRoute */}
          <Route path="/dashboard" element={<DashboardRoutes />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
