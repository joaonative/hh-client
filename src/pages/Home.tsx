import { useQuery } from "react-query";
import { useAuth } from "../AtuhContext";
import Container from "../components/layout/Container";
import GridContainer from "../components/layout/GridContainer";
import SideBar from "../components/layout/SideBar";
import Greeting from "../components/ui/Greeting";
import HourHabitBox from "../components/ui/HourHabitBox";
import { Stats, getUserStats } from "../data/stats";

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
          <Greeting />
          <GridContainer>
            {stats?.totalBadOccurrences && (
              <HourHabitBox
                percentage={stats.percentChangeBad}
                quantity={stats.totalBadOccurrences}
                bad
              />
            )}
          </GridContainer>
        </div>
      </Container>
    </>
  );
}

export default Home;
