import { useState } from "react";
import { deleteHabit, markAsDone } from "../../data/habits";
import { useMutation } from "react-query";

interface HabitCardProps {
  id?: string;
  name?: string;
  description?: string;
  frequency?: number;
  done?: boolean;
  goal: number;
  onHabitDeleted: () => void;
}

function HabitCard({
  id,
  name,
  description,
  frequency,
  done,
  goal,
  onHabitDeleted,
}: HabitCardProps) {
  const [isDone, setIsDone] = useState(done);
  const [isDisabled, setIsDisabled] = useState(done);

  const deleteHabitMutation = useMutation(deleteHabit, {
    onSuccess: () => {
      setIsDisabled(true);
      onHabitDeleted();
    },
  });

  const handleMark = () => {
    if (id) {
      markAsDone(id);
      setIsDone(!isDone);
      setIsDisabled(true);
    }
  };

  const handleDelete = () => {
    if (id) {
      deleteHabitMutation.mutate(id);
    }
  };

  return (
    <div className="lg:col-span-1 col-span-3 row-span-3 bg-darker p-5 rounded-lg flex flex-col gap-10 h-max">
      <div className="flex justify-between items-center">
        <div className="flex w-ful items-center gap-3">
          <img src="book.svg" alt="" className="h-8" />
          <h1 className="lg:w-80 w-30 text-xl text-start">{name}</h1>
        </div>
        <img
          onClick={handleDelete}
          src="delete.svg"
          alt="delete icon"
          className="transition-all duration-300 hover:scale-125 cursor-pointer"
        />
      </div>
      <h2 className="text-half_text mt-[-20px] lg:h-10 w-full h-8 break-words">
        {description}
      </h2>
      <div className="flex w-full items-center justify-between text-half_text">
        <h1 className="text-base">
          {frequency}/{goal} Days
        </h1>

        {done ? (
          <div className="flex gap-3 items-center">
            <img src="done.svg" alt="" className="h-8" />
            <h1 className="text-base">Completed today</h1>
          </div>
        ) : (
          <button
            className={`flex gap-3 items-center transition-colors duration-300 ${
              isDone ? "text-primary" : "text-half_text"
            }`}
            onClick={handleMark}
            disabled={isDisabled}
          >
            <img
              src={isDone ? "done.svg" : "not-done.svg"}
              alt=""
              className="h-8"
            />
            <h1 className="text-base">
              {isDone ? "Completed today" : "Mark as completed"}
            </h1>
          </button>
        )}
      </div>
    </div>
  );
}

export default HabitCard;
