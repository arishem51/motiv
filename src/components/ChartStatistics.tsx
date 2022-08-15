import { Line } from "react-chartjs-2";
import {
  CategoryScale,
  Chart as ChartJS,
  LinearScale,
  LineElement,
  PointElement,
} from "chart.js";

ChartJS.register([CategoryScale, LinearScale, PointElement, LineElement]);

const ChartStatistics = () => {
  return (
    <Line
      datasetIdKey="id"
      data={{
        labels: ["Jun", "Jul", "Aug"],
        datasets: [
          {
            data: [1, 2, 3],
          },
        ] as any,
      }}
      width={800}
      height={400}
      options={{ maintainAspectRatio: false }}
    />
  );
};

export default ChartStatistics;
