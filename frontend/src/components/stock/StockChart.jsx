import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const StockChart = ({ prices }) => {
  const data = {
    labels: prices.map((_, i) => i + 1),
    datasets: [
      {
        label: "Stock Price",
        data: prices,
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59,130,246,0.2)",
        tension: 0.4,
      },
    ],
  };

  return <Line data={data} />;
};

export default StockChart;