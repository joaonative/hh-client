function Footer() {
  return (
    <footer className="mt-10 h-max w-full flex flex-col items-start gap-4 lg:gap-10 bg-darker bg-cover pt-2 lg:pt-4">
      <div className="w-full h-max flex flex-col items-center justify-center gap-2">
        <h1 className=" text-lg lg:text-2xl">Study project!</h1>
        <h2 className="text-sm lg:text-base text-center px-2">
          This project is not maintained by any corporation{" "}
          <br className="lg:hidden" />
          and was made for the purposes of programming and design studies.
        </h2>
      </div>
      <div className="w-full h-max text-center text-base p-1">
        made & desined by {""}
        <a
          href="https://github.com/joaonative"
          target="_blank"
          className="text-blue-400"
        >
          @joaonative
        </a>{" "}
        &{" "}
        <a
          href="https://github.com/joaosiqueirx"
          target="_blank"
          className="text-blue-400"
        >
          @joaosiqueirx
        </a>
      </div>
    </footer>
  );
}

export default Footer;
