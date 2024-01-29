interface HourHabitBoxProps {
  good?: boolean;
  bad?: boolean;
  quantity: number;
  percentage: number;
}

function HourHabitBox({ good, bad, quantity, percentage }: HourHabitBoxProps) {
  return (
    <div className="col-span-1 bg-darker p-5 rounded-lg flex flex-col gap-10">
      <h1 className="text-xl w-30 lg:w-80">
        {" "}
        <span className="text-primary">
          {good ? "Good" : bad && "Bad"}
        </span>{" "}
        habits {good ? "done" : bad && "avoided"} during this month
      </h1>
      <div className="flex w-full justify-between items-center">
        <h1 className="text-5xl w-20">{quantity}</h1>
        <div className="flex items-center gap-2 border border-primary rounded-lg px-2 py-1">
          <img src="arrow.svg" alt="arrow icon" className="w-5" />
          <span className="text-primary text-xl">{percentage}%</span>
        </div>
      </div>
    </div>
  );
}
export default HourHabitBox;
