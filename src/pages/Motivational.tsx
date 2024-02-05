import { useMutation, useQuery } from "react-query";
import { useAuth } from "../AtuhContext";
import Container from "../components/layout/Container";
import GridContainer from "../components/layout/GridContainer";
import SideBar from "../components/layout/SideBar";
import ReportCard from "../components/ui/ReportCard";
import {
  Report,
  ReportResponse,
  createReport,
  getReports,
} from "../data/reports";
import { useState } from "react";
import Modal from "../components/ui/Modal";
import Button from "../components/ui/Button";
import { motion } from "framer-motion";

function Motivational() {
  const { userData } = useAuth();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [reportValue, setReportValue] = useState("");

  const handleReportChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setReportValue(event.target.value);
  };

  const handleClick = () => {
    setIsModalOpen(!isModalOpen);
    return false;
  };

  const imageUrl = userData?.picture;
  const author = userData?.email;
  const name = userData?.name;

  async function handleSubmit(event: any) {
    event.preventDefault();
    try {
      const reportData: Report = {
        author: author,
        imageUrl: imageUrl || "defaultImage.png",
        report: reportValue,
        name: name,
      };

      await createReportMutation.mutate(reportData);
    } catch (err) {
      alert("Error creating report, please try again.");
    }
  }

  const { data: report, refetch } = useQuery<ReportResponse>({
    queryKey: ["reports"],
    queryFn: async () => getReports(),
  });

  const createReportMutation = useMutation(createReport, {
    onSuccess: () => {
      refetch();
      setIsModalOpen(false);
    },
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

  return (
    <>
      <SideBar />
      <Container>
        <h1 className="font-semibold lg:text-xl text-base w-full py-3">
          Daily Advices. Read and write reports to motivate someone, aiming to
          <span className="text-primary"> continuous improvement.</span>
        </h1>
        <GridContainer>
          {Array.isArray(report) && (
            <>
              {report.map((report, index) => (
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
                  <ReportCard
                    author={report.name}
                    imageUrl={report.imageUrl}
                    report={report.report}
                    key={report.report}
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
          message="Create an report"
        >
          <form
            action=""
            className="flex flex-col items-start justify-start gap-3"
          >
            <textarea
              placeholder="Report message"
              value={reportValue}
              onChange={handleReportChange}
              className="overflow-hidden w-80 h-32 p-3 border border-background rounded-lg bg-background transition duration-300 text-base leading-6 outline-none"
            />
            <button
              className="w-full bg-primary py-2 rounded-lg text-base"
              type="submit"
              onClick={handleSubmit}
              disabled={!reportValue}
            >
              Create Report
            </button>
          </form>
        </Modal>
      )}
      <Button
        handleClick={handleClick}
        styleClass="bottom-6 right-6 fixed"
        primary
        name="Create an report"
      />
    </>
  );
}

export default Motivational;
