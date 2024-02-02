function Loading() {
  return (
    <div className="flex flex-col gap-8 w-full h-full items-center">
      <img src="Processing.gif" alt="" className="h-80 lg:h-96" />
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-primary text-2xl">Loading Stats</h1>
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full animate-pulse bg-primary"></div>
          <div className="w-3 h-3 rounded-full animate-pulse bg-primary"></div>
          <div className="w-3 h-3 rounded-full animate-pulse bg-primary"></div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
