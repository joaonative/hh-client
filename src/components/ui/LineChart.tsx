import { Line } from "react-chartjs-2";

const LineChart = () => {
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
        data: [10, 20, 15, 25, 30, 12, 24, 32, 12, 20, 23, 22],
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
