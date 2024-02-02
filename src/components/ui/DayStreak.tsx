import WeekSpan from "./WeekSpan";

interface DayStreakProps {
  count: number;
  weeklyDays: boolean[];
}

function DayStreak({ count, weeklyDays }: DayStreakProps) {
  const formattedCount =
    count === 0 ? "00" : count < 10 ? `0${count}` : String(count);
  return (
    <div className="lg:col-span-1 col-span-3 row-span-3 bg-darker p-5 rounded-lg flex flex-col gap-5 lg:h-80">
      <h1 className="text-xl">Current streak</h1>
      <div className="flex items-center gap-12 justify-center">
        <img
          src="logo.svg"
          alt="logo.svg"
          className="h-14 -rotate-12 overflow-hidden"
        />
        <div className="bg-streak bg-cover p-2">
          <span className="border border-dashed border-off_white flex items-center justify-center p-2 rounded-full">
            <span className="border border-primary flex items-center justify-center p-6 rounded-full">
              <p className="text-5xl">{formattedCount}</p>
            </span>
          </span>
        </div>
        <img
          src="logo.svg"
          alt="logo.svg"
          className="h-14 rotate-12 overflow-hidden"
        />
      </div>

      <WeekSpan weeklyDays={weeklyDays} />
    </div>
  );
}

export default DayStreak;
