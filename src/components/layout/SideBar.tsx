import { useState } from "react";
import SideBarItem from "./SideBarItem";
import LoginButton from "../ui/LoginButton";

function SideBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="h-max w-max absolute flex flex-row gap-0 lg:gap-1 justify-start">
        <div
          className={`flex flex-col justify-between items-center bg-darker text-off_white lg:p-5 px-2 py-4 lg:w-max w-max h-screen transition-transform duration-300 ${
            !isSidebarOpen && "hidden lg:flex"
          }`}
        >
          <nav className="lg:flex flex-col items-center gap-3">
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
              <LoginButton
                name="Sign in with Google"
                icon="google-logo.svg"
                isOpen={isSidebarOpen}
              />
            </div>
          </nav>
        </div>
        <span
          className="mt-16 ml-[-20px] hidden lg:block bg-darker w-max h-max px-[8px] py-[8px] rounded-full hover:bg-background transition-colors duration-300"
          onClick={handleToggleSidebar}
        >
          <img
            src="open-close.svg"
            className={`cursor-pointer h-4 transition-transform duration-300 ${
              !isSidebarOpen && "rotate-180"
            }`}
          />
        </span>
      </div>
      <div className="">
        {isSidebarOpen ? (
          <span className="absolute left-64 w-max lg:hidden">
            <img
              src="close.svg"
              className="ml-5 my-7 w-7 lg:hidden block transition-all duration-700"
              onClick={handleToggleSidebar}
            />
          </span>
        ) : (
          <span className="absolute w-max lg:hidden">
            <img
              src="menu.svg"
              className="ml-3 my-6 w-10 lg:hidden block transition-all duration-700"
              onClick={handleToggleSidebar}
            />
          </span>
        )}
      </div>
    </>
  );
}

export default SideBar;
