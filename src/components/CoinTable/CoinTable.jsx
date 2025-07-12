
import { fetchCoinData } from "../../service/fetchCoinData";
import { useQuery } from "@tanstack/react-query";
import currencyStore from  '../../State/Money';
import pageCount from "../../State/pageCount";
import { useNavigate } from "react-router-dom";
function CoinTable() {
  const { count, inc, dec } = pageCount();
  const navigate = useNavigate();
  
  function handleCoinDetail(id){
   navigate(`/details/${id}` );
  }
  
const { currency } = currencyStore();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["coins", count, currency],
    queryFn: () => fetchCoinData(count, currency),
    cacheTime: 1000 * 60 * 2,
    staleTime: 1000 * 60 * 2,
    // retry: 2,
    // retryDelay: 1000,
  });

  if (isError) {
    return <div>Error: {error.message}</div>;
  }


  return (
    <div className="my-5 flex flex-col items-center justify-center gap-5 w-[80vw] mx-auto">
      <div className="flex items-center justify-center w-full px-2 py-4 font-semibold text-black bg-yellow-400">
        {/* Header of the table */}
        <div className="basis-[35%]">Coin</div>
        <div className="basis-[25%]">Price</div>
        <div className="basis-[20%]">24h change</div>
        <div className="basis-[20%]">Market Cap</div>
      </div>

      <div className="flex flex-col w-[80vw] mx-auto">
        {isLoading && <div>Loading...</div>}
        {data &&
          data.map((coin) => {
            return (
              <div
                key={coin.id}
                className="flex items-center justify-between w-full px-2 py-4 font-semibold text-black bg-transparent cursor-pointer"
                onClick={()=> handleCoinDetail(coin.id)}
              >
                <div className="flex items-center justify-start gap-3 basis-[35%] ">
                  <div className="w-[5rem] h-[5rem]">
                    <img src={coin.image} className="w-full h-full" />
                  </div>

                  <div className="flex flex-col">
                    <div className="text-3xl">{coin.name}</div>
                    <div className="text-xl">{coin.symbol}</div>
                  </div>
                </div>

                <div className="basis-[25%]">{coin.current_price}</div>
                <div className="basis-[20%]">{coin.price_change_24h}</div>
                <div className="basis-[20%]">{coin.market_cap}</div>
              </div>
            );
          })}
      </div>

      <div className="flex items-center justify-center gap-4">
        <button
          disabled={count === 1}
          onClick={dec}
          className="text-2xl text-white btn btn-primary btn-wide"
        >
          Prev
        </button>
        <button
          onClick={inc}
          className="text-2xl text-white btn btn-secondary btn-wide"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default CoinTable;
