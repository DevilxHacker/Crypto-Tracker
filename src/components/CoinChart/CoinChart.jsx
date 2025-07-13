import { useQuery } from "@tanstack/react-query";
import { fetchHistoricData } from "../../service/fetchHistoricData";
import currencyStore from "../../State/Money";import DayCount from "../../State/DayCount";
import CoinChartUI from "./CoinChartUI";

import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend, Filler);

function CoinChart({ id }) {
  const { currency } = currencyStore();
  const { day } = DayCount();

  const {
    isError,
    error,
    isLoading,
    data: coin,
  } = useQuery({
    queryKey: ["coin", id, currency, day],
    queryFn: () => fetchHistoricData(id, currency, day, ''),
    cacheTime: 1000 * 60 * 2,
    staleTime: 1000 * 60 * 2,
  });

  if (isLoading) {
    return <div>Loading chart...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <CoinChartUI coin={coin} id={id} currency={currency} />
    </>
  );
}

export default CoinChart;
