import { lazy, useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import DasboardReducer from "../reducers/DashboardReducer";
import { dashboardOptions } from "../utils/constants";


//Util Components
const NavBar = lazy(() => import("../components/dashboard/NavBar"));
const SideBar = lazy(() => import("../components/dashboard/SideBar"));
const SideBarItem = lazy(() => import("../components/dashboard/SideBarItem"));

//Route Pages
const Home = lazy(() => import("../pages/dashboard/Home"));
const Others = lazy(() => import("../pages/dashboard/Others"));
const NotFound = lazy(() => import("../pages/404"));

function useDashboardRoute() {
  const [state, dispatch] = useReducer(DasboardReducer, dashboardOptions[0]);

  return (
    <main className="h-screen w-screen flex">
      {/* Side bar takes up 20% of total width and 100% of height */}
      <SideBar>
        {dashboardOptions.map((currentOption) => (
          <SideBarItem
            key={currentOption.type}
            data={currentOption}
            dispatch={dispatch}
            state={state}
          />
        ))}
      </SideBar>

      {/* Routes and dashboard take up 80% of total width and 100% of height*/}
      <div className="w-[80%] flex p-2 bg-blue-400 flex-col h-full">
        <NavBar />
        <div className="w-full h-[90%] overflow-y-auto">
          <Routes>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />

            <Route path="others" element={<Others />} />
          </Routes>
        </div>
      </div>
    </main>
  );
}

export default useDashboardRoute;
