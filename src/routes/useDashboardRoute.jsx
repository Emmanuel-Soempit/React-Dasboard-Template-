import { lazy, useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import DasboardReducer from "../reducers/DashboardReducer";
import { dashboardOptions } from "../utils/constants";

//Util Components
const NavBar = lazy(() => import("../components/dashboard/NavBar"));
const SideBar = lazy(() => import("../components/dashboard/SideBar"));

//Route Pages
const Home = lazy(() => import("../pages/dashboard/Home"));
const Others = lazy(() => import("../pages/dashboard/Others"));



function useDashboardRoute() {

    const {} = useReducer(DasboardReducer, dashboardOptions[0])

  return (
    <main className="h-screen w-screen flex">
      {/* Side bar takes up 20% of total width and 100% of height */}
      <SideBar />

      {/* Routes and dashboard take up 80% of total width and 100% of height*/}
      <div className="w-[80%] flex p-2 bg-blue-400 flex-col h-full">
        <NavBar />
        <div className="w-full h-[90%] overflow-y-auto">
          <Routes>
            <Route index element={<Home />} />
            <Route path="other" element={<Others />} />
          </Routes>
        </div>
      </div>
    </main>
  );
}

export default useDashboardRoute;
