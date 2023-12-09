import { useContext, useEffect, useState } from "react";
import DonationsCard from "./DonationsCard";
import { FilterContext } from "../../pages/Home/Home";
import NoDataFound from "./NoDataFound";

const Donations = ({ donations }) => {
  const [catFilterSearch] = useContext(FilterContext);
  const [searchedData, setSearchedData] = useState(null);

  //const [noDataFound, setNoDataFound] = useState('');

  useEffect(() => {
    const filterText = catFilterSearch.toLowerCase();
    const filteredData = donations?.filter(
      (donation) => donation.category.toLowerCase() === filterText
    );
    setSearchedData(filteredData.length > 0 ? filteredData : null);
  }, [catFilterSearch, donations]);

  //const displayData = searchedData || donations;

  return (
    <div className="max-w-7xl mx-auto px-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 my-20">
        {!catFilterSearch && !searchedData ? (
          donations?.map((donation) => (
            <DonationsCard
              key={donation.id}
              donation={donation}
            ></DonationsCard>
          ))
        ) : catFilterSearch && !searchedData ? (
          <NoDataFound catFilterSearch={catFilterSearch}></NoDataFound>
        ) : (
          searchedData.map((donation) => (
            <DonationsCard
              key={donation.id}
              donation={donation}
            ></DonationsCard>
          ))
        )}
      </div>
    </div>
  );
};

export default Donations;
