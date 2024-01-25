import NavigationButton from "../ui/NavigationButton";
import Footer from "./Footer";
import Header from "./Header";

function NotFound() {
  return (
    <>
      <Header />
      <div className="flex flex-col place-items-center justify-center container mt-10 px-4">
        <img src="404 Error.gif" alt="" className="h-80 lg:h-96" />
        <div className="flex flex-col items-center justify-center gap-5">
          <h1 className="text-primary text-2xl text-center">
            Oops, it looks like you're too early
          </h1>
          <NavigationButton name="go back home" path="/" secondary />
        </div>
      </div>
    </>
  );
}

export default NotFound;
