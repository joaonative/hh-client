import { Line } from "react-chartjs-2";

interface LineChartProps {
  lineData: any[];
}

const LineChart = ({ lineData }: LineChartProps) => {
  const lineChartData = Object.values(lineData);
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Monthly Habits",
        data: lineChartData,
        borderColor: "#9747FF",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: false,
      },
    },
  };

  return (
    <div className="bg-darker p-5 rounded-lg lg:col-span-2 col-span-3 lg:h-80 h-52 row-span-3 flex items-center justify-center">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
