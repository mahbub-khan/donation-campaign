import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Donations from "../../components/Donations/Donations";
import { createContext, useState } from "react";

export const FilterContext = createContext();

const Home = () => {
  const donations = useLoaderData();
  const [catFilterSearch, setCatFilterSearch] = useState("");

  return (
    <div>
      <FilterContext.Provider value={[catFilterSearch, setCatFilterSearch]}>
        <Banner></Banner>
        <Donations donations={donations}></Donations>
      </FilterContext.Provider>
    </div>
  );
};

export default Home;
