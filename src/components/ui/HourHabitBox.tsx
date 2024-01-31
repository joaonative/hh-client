interface HourHabitBoxProps {
  good?: boolean;
  bad?: boolean;
  quantity: number;
  percentage: number | null;
}

function HourHabitBox({ good, bad, quantity, percentage }: HourHabitBoxProps) {
  return (
    <div className="lg:col-span-1 col-span-3 row-span-3 bg-darker p-5 rounded-lg flex flex-col gap-10 h-max">
      <h1 className="text-xl w-80 lg:w-96 text-start">
        <span className="text-primary">
          {good ? "Good" : bad ? "Bad" : "Total"}
        </span>{" "}
        habits {good ? "done" : bad ? "avoided" : "done"} in this month
      </h1>
      <div className="flex w-full justify-between items-center">
        <h1 className="text-5xl w-20">{quantity}</h1>
        <div className="flex items-center gap-2 border border-primary rounded-lg px-2 py-1">
          <img
            src={
              percentage !== null
                ? percentage > 0
                  ? "arrow.svg"
                  : percentage < 0
                  ? "arrow-down.svg"
                  : "null.svg"
                : "null.svg"
            }
            alt="arrow icon"
            className="w-5"
          />
          <span className="text-primary text-xl">
            {percentage != null ? `${percentage}%` : "N/A"}
          </span>
        </div>
      </div>
    </div>
  );
}
export default HourHabitBox;
