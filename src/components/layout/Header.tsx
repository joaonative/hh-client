import SimpleLoginButton from "../ui/SimpleLoginButton";

function Header() {
  return (
    <header className="flex flex-row justify-between items-center w-full h-max p-6">
      <div className="flex flex-row items-center gap-5 text-base">
        <a href="/">
          <img src="main-logo.svg" alt="Harmony Hub logo" />
        </a>
        <a href="https://github.com/joaonative/hh-client" target="_blank">
          GitHub
        </a>
      </div>
      <SimpleLoginButton name="Try it" />
    </header>
  );
}

export default Header;
