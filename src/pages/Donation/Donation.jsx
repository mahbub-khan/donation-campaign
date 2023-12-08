import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationCard from "./DonationCard";

const Donation = () => {
  const [donation, setDonation] = useState({});

  const { id } = useParams();
  //const idInt = parseInt(id);
  // console.log(idInt);

  const donations = useLoaderData();

  useEffect(() => {
    const findDonation = donations?.find((donation) => donation.id === id);

    setDonation(findDonation);
  }, [id, donations]);

  //console.log(donation);

  return (
    <div>
      <div className="max-w-7xl mx-auto my-16">
        <DonationCard donation={donation}></DonationCard>
      </div>
    </div>
  );
};

export default Donation;
