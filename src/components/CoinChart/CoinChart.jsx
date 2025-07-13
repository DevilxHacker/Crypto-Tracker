// import { useQuery } from "@tanstack/react-query";
// import { fetchHistoricData } from "../../service/fetchHistoricData";
// import currencyStore from  '../../State/Money';
// import IntervalCount from "../../State/IntervalCount";
// import DayCount from "../../State/DayCount";
// import CoinChartUI from "./CoinChartUI";
// import {
//   Chart as ChartJS,
//   LineElement,
//   PointElement,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   Legend,
//   Filler,
// } from "chart.js";
// ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend, Filler);
// function CoinChart({id}){
//     const { currency } = currencyStore();
//     const { interval } = IntervalCount();
//     const { day } = DayCount();
    
 
// const { isError,error, isLoading,isSuccess, data:coin } = useQuery({
//   queryKey: ["coin", id],
//   queryFn: () => fetchHistoricData(id,currency,day,interval),
//   cacheTime: 1000 * 60 * 2,
//   staleTime: 1000 * 60 * 2,
// });
//     if(isLoading) {
//         return <div>waka waka...</div>
//     }
//     if (isSuccess) {
//     console.log('✅ Fetch successful:', coin);

//     if (isError) {
//     return <div>Error: {error.message}</div>;
//   }
//   return(
//     <>
    
//     <CoinChartUI/>
//     </>
//   )
// }

// }
// export default CoinChart;

import { useQuery } from "@tanstack/react-query";
import { fetchHistoricData } from "../../service/fetchHistoricData";
import currencyStore from "../../State/Money";
import IntervalCount from "../../State/IntervalCount";
import DayCount from "../../State/DayCount";
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
  const { interval } = IntervalCount();
  const { day } = DayCount();

  const {
    isError,
    error,
    isLoading,
    data: coin,
  } = useQuery({
    queryKey: ["coin", id, currency, day, interval],
    queryFn: () => fetchHistoricData(id, currency, day, interval),
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
