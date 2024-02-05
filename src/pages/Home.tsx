import { useQuery } from "react-query";
import { useAuth } from "../AtuhContext";
import Container from "../components/layout/Container";
import GridContainer from "../components/layout/GridContainer";
import SideBar from "../components/layout/SideBar";
import Greeting from "../components/ui/Greeting";
import HourHabitBox from "../components/ui/HourHabitBox";
import {
  Stats,
  getUserStats,
  Streak,
  getUserStreak,
  getUserYearStats,
} from "../data/stats";
import LineChart from "../components/ui/LineChart";
import DayStreak from "../components/ui/DayStreak";
import { useEffect, useState } from "react";
import Loading from "../components/ui/Loading";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";

function Home() {
  const handleCapture = () => {
    const divToCapture = document.getElementById("streak");
    if (divToCapture) {
      domtoimage.toBlob(divToCapture).then((blob) => {
        if (blob) {
          saveAs(blob, `${userData?.name} current streak`);
        } else {
          console.error("Failed to create blob.");
        }
      });
    }
  };

  const { userData } = useAuth();

  const [isLoading, setIsLoading] = useState(false);

  const { data: yearStats } = useQuery<any>({
    queryKey: ["yearStats"],
    queryFn: async () => getUserYearStats(userData?.email),
  });

  const { data: stats } = useQuery<Stats>({
    queryKey: ["stats"],
    queryFn: async () => getUserStats(userData?.email),
  });

  const { data: streak } = useQuery<Streak>({
    queryKey: ["streak"],
    queryFn: async () => getUserStreak(userData?.email),
  });

  useEffect(() => {
    if (!streak || !stats || !yearStats) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [streak, stats, yearStats]);

  return (
    <>
      <SideBar />
      <Container>
        {isLoading ? (
          <Loading />
        ) : (
          <div className="flex flex-col gap-3">
            <div className="w-full px-1">
              <Greeting />
            </div>
            <GridContainer>
              {yearStats && <LineChart lineData={yearStats} />}
              {streak && streak.streakCount >= 0 && streak.weeklyDays && (
                <DayStreak
                  count={streak.streakCount}
                  weeklyDays={streak.weeklyDays}
                />
              )}
            </GridContainer>
            <GridContainer>
              {stats?.totalBadOccurrences && (
                <HourHabitBox
                  percentage={stats.percentChangeBad}
                  quantity={stats.totalBadOccurrences}
                  bad
                />
              )}
              {stats?.totalGoodOccurrences && (
                <HourHabitBox
                  percentage={stats.percentChangeGood}
                  quantity={stats.totalGoodOccurrences}
                  good
                />
              )}
              {stats?.totalMonthlyOccurrences && (
                <HourHabitBox
                  percentage={stats.percentChangeTotal}
                  quantity={stats.totalMonthlyOccurrences}
                />
              )}
            </GridContainer>
            <div className="w-full flex lg:flex-row flex-col gap-2 lg:justify-between items-center">
              <span className="text-half_text lg:text-base text-sm">
                Complete habits consecutively to increase your streak, monitor
                your monthly stats, always aiming for personal improvement.
              </span>
              <button
                className="flex items-center gap-2 bg-darker rounded-lg p-2"
                onClick={handleCapture}
              >
                <p className="text-primary lg:text-base text-xs w-max">
                  Share your streak!
                </p>

                <img src="upload.svg" alt="upload icon" className="h-5 w-5" />
              </button>
            </div>
          </div>
        )}
      </Container>
    </>
  );
}

export default Home;
