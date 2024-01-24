function Footer() {
  return (
    <footer className="h-max w-full flex flex-col items-start gap-4 lg:gap-10 bg-footer bg-cover pt-4 lg:pt-12">
      <div className="w-full h-max flex flex-col items-center justify-center gap-3">
        <h1 className=" text-lg lg:text-4xl">Study project!</h1>
        <h2 className="text-sm lg:text-xl text-center px-2">
          This project is not maintained by any corporation{" "}
          <br className="lg:hidden" />
          and was made for the purposes of programming and design studies.
        </h2>
      </div>
      <div className="w-full h-max text-center text-base bg-darker p-1">
        made & desined by João Victor{" "}
        <a
          href="https://github.com/joaonative"
          target="_blank"
          className="text-blue-400"
        >
          @joaonative
        </a>
      </div>
    </footer>
  );
}

export default Footer;