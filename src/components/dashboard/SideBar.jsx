import React from "react";

function SideBar({ children }) {
  return (
    <aside className="w-[20%] h-full items-center bg-green-400 p-2 flex flex-col justify-between">
      Your side bar goes here
      <nav className="h-[90%] w-full flex justify-center bg-green-600">
        <ul>{children}</ul>
      </nav>
    </aside>
  );
}

export default React.memo(SideBar);
