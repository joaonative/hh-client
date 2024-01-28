function HabitCard() {
  return (
    <div className="col-span-1 bg-darker p-5 rounded-lg flex flex-col gap-10">
      <div className="flex w-ful items-center gap-3">
        <img src="book.svg" alt="" className="h-8" />
        <h1 className="lg:w-80 w-30 text-xl text-start">Read a book page</h1>
      </div>
      <div className="flex w-full items-center justify-between text-half_text">
        <h1 className="text-base">02/365 Days</h1>
        <div className="flex gap-3 items-center">
          <img src="done.svg" alt="" className="h-8" />
          <h1 className="text-base">Completed today</h1>
        </div>
      </div>
    </div>
  );
}

export default HabitCard;
