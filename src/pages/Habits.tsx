import { motion } from "framer-motion";
import Container from "../components/layout/Container";
import GridContainer from "../components/layout/GridContainer";
import SideBar from "../components/layout/SideBar";
import HabitCard from "../components/ui/HabitCard";
import { useQuery } from "react-query";
import {
  Habit,
  HabitsApiResponse,
  createHabit,
  getHabits,
} from "../data/habits";
import { useAuth } from "../AtuhContext";
import ErrorPopUp from "../components/ui/Error";
import { useState } from "react";
import Input from "../components/ui/Input";
import Modal from "../components/ui/Modal";
import Button from "../components/ui/Button";

function Habits() {
  const { userData } = useAuth();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [nameValue, setNameValue] = useState<string>("");
  const [descValue, setDescValue] = useState<string>("");
  const [goalValue, setGoalValue] = useState<number>(0);
  const [isGoodValue, setIsGoodValue] = useState(true);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameValue(event.target.value);
  };
  const handleDescChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescValue(event.target.value);
  };
  const handleGoalChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGoalValue(parseInt(event.target.value, 10));
  };

  const handleClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  async function handleSubmit() {
    try {
      const habitData: Habit = {
        name: nameValue,
        description: descValue,
        author: userData?.email ?? "dev@harmonyhub.com",
        goal: goalValue,
        isGood: isGoodValue,
      };

      await createHabit(habitData);
      window.location.reload();
    } catch (err) {
      alert("Error creating habit, please try again.");
    }
  }

  const author = userData?.email;

  const { data: habits } = useQuery<HabitsApiResponse>({
    queryKey: ["habits"],
    queryFn: async () => getHabits(author),
  });

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

  const calculateDelay = (index: number) => {
    const baseDelay = 0.2;
    const numGroups = Math.floor(index / 4);
    const delay = baseDelay * numGroups + 0.1 * (index % 4);
    return delay;
  };

  const isToday = (date: Date) => {
    const today = new Date();
    const compareDate = new Date(date);

    return (
      today.getFullYear() === compareDate.getFullYear() &&
      today.getMonth() === compareDate.getMonth() &&
      today.getDate() === compareDate.getDate()
    );
  };

  return (
    <>
      <SideBar />
      <Container>
        <GridContainer>
          {habits?.error && <ErrorPopUp message={habits.error.message} />}

          {Array.isArray(habits?.data) && (
            <>
              {habits.data.map((habit, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    duration: 0.5,
                    delay: calculateDelay(index),
                  }}
                >
                  <HabitCard
                    key={index}
                    id={habit._id}
                    name={habit.name}
                    description={habit.description}
                    frequency={habit.frequency}
                    goal={habit.goal}
                    done={habit.lastPerformed && isToday(habit.lastPerformed)}
                  />
                </motion.div>
              ))}
            </>
          )}
        </GridContainer>
      </Container>
      {isModalOpen && (
        <Modal
          confirmMessage="create"
          onCancel={() => {
            setIsModalOpen(!isModalOpen);
          }}
          message="Create an habit"
        >
          <form
            action=""
            className="flex flex-col items-start justify-start gap-3"
          >
            <Input
              placeholder="Name"
              value={nameValue}
              onChange={handleNameChange}
            />
            <Input
              placeholder="Description"
              value={descValue}
              onChange={handleDescChange}
            />
            <div className="flex flex-col gap-1">
              <h1 className="text-base text-half_text">
                What is your goal? {"(days)"}
              </h1>
              <Input
                placeholder="Goal"
                number
                value={goalValue}
                onChange={handleGoalChange}
              />
            </div>
            <span className="flex gap-3 items-center w-full">
              {isGoodValue ? (
                <img
                  src="done.svg"
                  alt=""
                  onClick={() => setIsGoodValue(!isGoodValue)}
                  className="cursor-pointer w-8"
                />
              ) : (
                <img
                  src="not-done.svg"
                  alt=""
                  onClick={() => setIsGoodValue(!isGoodValue)}
                  className="cursor-pointer w-8"
                />
              )}
              <p className="text-base">is this a good habit?</p>
            </span>
          </form>
          <button
            className="w-full bg-primary py-2 rounded-lg text-base"
            type="submit"
            onClick={handleSubmit}
            disabled={!nameValue || !descValue || goalValue <= 0}
          >
            Create Habit
          </button>
        </Modal>
      )}
      <Button
        handleClick={handleClick}
        styleClass="absolute bottom-6 right-6"
        primary
        name="Create an habit"
      />
    </>
  );
}

export default Habits;
