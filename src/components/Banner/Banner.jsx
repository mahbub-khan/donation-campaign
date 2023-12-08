const Banner = () => {
  return (
    <div className="relative">
      <div
        className="h-[70vh] bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: "url('https://i.ibb.co/5n5vT0M/banner.jpg')",
        }}
      ></div>
      <div className="h-[70vh] bg-white bg-opacity-80 absolute inset-0 w-full">
        <div className="h-[70vh] flex justify-center items-center">
          <div className="text-center">
            <h1 className="text-3xl sm:text-5xl font-bold mb-5 sm:mb-10 px-5 sm:px-10">
              I Grow By Helping People In Need
            </h1>
            <div className="px-5 sm:px-10">
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
              <input
                type="submit"
                value="Search"
                className="btn bg-[#FF444A] text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
