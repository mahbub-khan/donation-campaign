import { useContext, useState } from "react";
import { FilterContext } from "../../pages/Home/Home";

const Banner = () => {
  const [catFilterSearch, setCatFilterSearch] = useContext(FilterContext);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setCatFilterSearch(inputValue);
  };
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="relative">
      <div
        className="h-[50vh] md:h-[70vh] bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: "url('https://i.ibb.co/5n5vT0M/banner.jpg')",
        }}
      ></div>
      <div className="h-[50vh] md:h-[70vh] bg-white bg-opacity-80 absolute inset-0 w-full">
        <div className="h-[50vh] md:h-[70vh] flex justify-center items-center">
          <div className="text-center">
            <h1 className="text-3xl sm:text-5xl font-bold mb-5 sm:mb-10 px-5 sm:px-10">
              I Grow By Helping People In Need
            </h1>
            <div className="px-5 sm:px-10">
              <form onSubmit={handleSubmit}>
                <input
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Type Category Name here"
                  className="input input-bordered w-full max-w-[250px] sm:max-w-xs rounded-none rounded-l-xl focus:outline-none"
                />
                <input
                  type="submit"
                  value="Search"
                  className="btn bg-[#FF444A] text-white rounded-none rounded-r-xl -ml-2 -mt-2 border-t-[3px] border-[#FF444A]"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
