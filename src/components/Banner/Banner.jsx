import BannerImage from "../../assets/banner.jpg";

function Banner() {
  return (
    <div className="w-full h-[25rem] relative">
      <img src={BannerImage} className="w-full h-full" />

      <div className="absolute top-20 left-0 right-0 mx-auto w-[20rem]">
        <div className="flex flex-col gap-4">
          <div className="text-5xl font-semibold text-white">
            Crypto Tracker
          </div>
          <marquee direction="right">
            <div className="text-sm font-semibold text-center text-white">
              Get all info regarding cryptocurrencies
            </div>
          </marquee>
        </div>
      </div>
    </div>
  );
}

export default Banner;
