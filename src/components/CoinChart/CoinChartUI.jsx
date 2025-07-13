import DayCount from "../../State/DayCount";
import { Line } from "react-chartjs-2";

function CoinChartUI({ coin, id, currency }) {
  const { setDay } = DayCount();

  const labels = coin.prices.map(([timestamp]) =>
    new Date(timestamp).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    })
  );
  const prices = coin.prices.map(([_, price]) => price);

  const data = {
    labels,
    datasets: [
      {
        label: `${id.toUpperCase()} Price (${currency.toUpperCase()})`,
        data: prices,
        fill: true,
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: false,
      },
    },
  };
  return (
    <>
      <div className="flex justify-center w-3/4 gap-3 m-auto">
     
        <div className="flex">
          <select onChange={(e) => setDay(Number(e.target.value))}>
            <option disabled>Select Day</option>
            <option value="7">7 Days</option>
            <option selected="true" value="30" >30 Days</option>
            <option value="180">6 Months</option>
            <option value="365">1 Year</option>
          </select>
        </div>
      </div>
      <Line data={data} options={options} />
    
    </>
  );
}
export default CoinChartUI;
