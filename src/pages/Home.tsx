import { useQuery } from "react-query";
import { useAuth } from "../AtuhContext";
import Container from "../components/layout/Container";
import GridContainer from "../components/layout/GridContainer";
import SideBar from "../components/layout/SideBar";
import Greeting from "../components/ui/Greeting";
import HourHabitBox from "../components/ui/HourHabitBox";
import { Stats, getUserStats } from "../data/stats";
import LineChart from "../components/ui/LineChart";
import DayStreak from "../components/ui/DayStreak";

function Home() {
  const { userData } = useAuth();

  const { data: stats } = useQuery<Stats>({
    queryKey: ["stats"],
    queryFn: async () => getUserStats(userData?.email),
  });
  return (
    <>
      <SideBar />
      <Container>
        <div className="flex flex-col gap-3">
          <div className="w-full px-1">
            <Greeting />
          </div>
          <GridContainer>
            <LineChart />
            <DayStreak />
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
        </div>
      </Container>
    </>
  );
}

export default Home;
