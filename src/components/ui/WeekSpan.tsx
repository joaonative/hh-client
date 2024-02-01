interface WeekSpanProps {
  weeklyDays: boolean[];
}

const WeekSpan = ({ weeklyDays }: WeekSpanProps) => {
  return (
    <div className="border border-half_text flex items-center justify-between px-5 py-2 rounded-lg">
      {weeklyDays.map((isChecked, index) => (
        <span key={index} className="flex flex-col items-center">
          <p>{"SMTWTFS"[index]}</p>
          <img
            src={isChecked ? "done.svg" : "incomplete.svg"}
            alt="done icon indicator"
            className="h-8"
          />
        </span>
      ))}
    </div>
  );
};

export default WeekSpan;
