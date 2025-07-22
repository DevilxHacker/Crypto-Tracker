
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
  <div className="my-5 flex flex-col items-center justify-center gap-5 w-[90vw] sm:w-[80vw] mx-auto">
    {/* Header - hidden on mobile */}
    <div className="items-center justify-center hidden w-full px-2 py-4 font-semibold text-black bg-yellow-400 sm:flex">
      <div className="basis-[35%]">Coin</div>
      <div className="basis-[25%]">Price</div>
      <div className="basis-[20%]">24h change</div>
      <div className="basis-[20%]">Market Cap</div>
    </div>

    <div className="flex flex-col w-full mx-auto">
      {isLoading && <div className="py-4 text-center">Loading...</div>}
      {data &&
        data.map((coin) => (
          <div
            key={coin.id}
            className="flex flex-col items-start justify-between w-full px-4 py-4 font-semibold text-black bg-transparent border-2 border-solid cursor-pointer sm:flex-row sm:items-center"
            onClick={() => handleCoinDetail(coin.id)}
          >
            {/* Coin details */}
            <div className="flex items-center gap-3 w-full sm:basis-[35%] mb-2 sm:mb-0">
              <div className="flex-shrink-0 w-12 h-12 sm:w-20 sm:h-20">
                <img src={coin.image} className="object-contain w-full h-full" />
              </div>
              <div className="flex flex-col">
                <div className="text-lg sm:text-2xl">{coin.name}</div>
                <div className="text-sm text-gray-600 uppercase sm:text-xl">{coin.symbol}</div>
              </div>
            </div>

            {/* Mobile stacked details */}
            <div className="flex flex-col w-full text-gray-700 sm:hidden">
              <span>Price: {coin.current_price}</span>
              <span>24h: {coin.price_change_24h}</span>
              <span>Market Cap: {coin.market_cap}</span>
            </div>

            {/* Desktop columns */}
            <div className="hidden sm:block sm:basis-[25%]">{coin.current_price}</div>
            <div className="hidden sm:block sm:basis-[20%]">{coin.price_change_24h}</div>
            <div className="hidden sm:block sm:basis-[20%]">{coin.market_cap}</div>
          </div>
        ))}
    </div>

    {/* Pagination */}
    <div className="flex items-center justify-center gap-4">
      <button
        disabled={count === 1}
        onClick={dec}
        className="text-lg text-white sm:text-2xl btn btn-primary btn-wide"
      >
        Prev
      </button>
      <button
        onClick={inc}
        className="text-lg text-white sm:text-2xl btn btn-secondary btn-wide"
      >
        Next
      </button>
    </div>
  </div>
);

}

export default CoinTable;
