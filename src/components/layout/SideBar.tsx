import { ReactNode, useState } from "react";
import SideBarItem from "./SideBarItem";
import LoginButton from "../ui/LoginButton";

function SideBar({ children }: { children: ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="flex flex-row gap-0 md:gap-1 md:items-center justify-start md:justify-center">
        <div
          className={`container flex flex-col justify-between items-center bg-darker text-white md:p-5 px-2 py-4 md:w-max h-screen transition-transform duration-300 ${
            !isSidebarOpen && "hidden md:flex"
          }`}
        >
          <nav className="md:flex flex-col items-center gap-3">
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
        <img
          src="/open-close.svg"
          onClick={handleToggleSidebar}
          className={`transition-transform duration-300 cursor-pointer p-2 md:block hidden ${
            isSidebarOpen ? "rotate-0" : "rotate-180"
          }`}
        />
        {isSidebarOpen ? (
          <span>
            <img
              src="close.svg"
              className="ml-5 my-6 w-10 md:hidden block overflow-hidden"
              onClick={handleToggleSidebar}
            />
          </span>
        ) : (
          <span className=" absolute w-full md:hidden">
            <img
              src="menu.svg"
              className="ml-5 my-6 w-10 md:hidden block"
              onClick={handleToggleSidebar}
            />
          </span>
        )}
      </div>
      <div
        className={`flex flex-col gap-5 md:my-8 my-20 px-2 ${
          isSidebarOpen && "hidden md:flex"
        }`}
      >
        {children}
      </div>
    </>
  );
}

export default SideBar;
