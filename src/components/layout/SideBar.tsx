import React, { useState } from "react";
import SideBarItem from "./SideBarItem";

function SideBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-row gap-1 items-center justify-center">
      <div
        className={`container flex flex-col justify-between items-center bg-darker text-white py-8 px-5 w-max h-screen`}
      >
        <nav className="flex flex-col items-center gap-3">
          <SideBarItem
            name="Harmony Hub"
            icon="/main-logo.svg"
            color="primary"
            path="/"
            isOpen={isSidebarOpen}
          />
          <div className="nav-item flex flex-col gap-3 items-center py-5">
            <SideBarItem
              name="Home"
              icon="home.svg"
              color="white"
              path="/home"
              isOpen={isSidebarOpen}
            />
            <SideBarItem
              name="Habits"
              icon="correct.svg"
              color="white"
              path="/habits"
              isOpen={isSidebarOpen}
            />
            <SideBarItem
              name="Motivational"
              icon="heart.svg"
              color="white"
              path="/motivational"
              isOpen={isSidebarOpen}
            />
          </div>
        </nav>
        <nav>
          <div className="nav-item flex flex-col gap-3 items-center py-5">
            <SideBarItem
              name="Settings"
              icon="settings.svg"
              color="white"
              path="/settings"
              isOpen={isSidebarOpen}
            />
            <SideBarItem
              name="Sign In"
              icon="correct.svg"
              color="white"
              path="/login"
              isOpen={isSidebarOpen}
            />
          </div>
        </nav>
      </div>
      <img
        src="/open-close.svg"
        onClick={handleToggleSidebar}
        className={`transition-transform duration-300 cursor-pointer p-2 ${
          isSidebarOpen ? "rotate-180" : "rotate-0"
        }`}
      />
    </div>
  );
}

export default SideBar;
