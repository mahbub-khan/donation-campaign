import { useEffect, useState } from "react";
import NoDonations from "./NoDonations";
import MyDonationsCard from "./MyDonationsCard";

const MyDonations = () => {
  const [myDonations, setMyDonations] = useState([]);
  const [noDonations, setNoDonations] = useState("");
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const myDonationItems = JSON.parse(localStorage.getItem("donations"));

    if (myDonationItems) {
      setMyDonations(myDonationItems);
    } else {
      setNoDonations("No donations yet");
    }
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-5 my-20">
      {noDonations ? (
        <NoDonations></NoDonations>
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            {isShow
              ? myDonations.map((donation) => (
                  <MyDonationsCard
                    key={donation.id}
                    donation={donation}
                  ></MyDonationsCard>
                ))
              : myDonations
                  .slice(0, 4)
                  .map((donation) => (
                    <MyDonationsCard
                      key={donation.id}
                      donation={donation}
                    ></MyDonationsCard>
                  ))}
          </div>
          {myDonations.length > 4 && (
            <button
              onClick={() => setIsShow(!isShow)}
              className="btn btn-success block mx-auto text-white"
            >
              {isShow ? "See less" : "See More"}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default MyDonations;
