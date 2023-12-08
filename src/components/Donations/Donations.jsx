import DonationsCard from "./DonationsCard";

const Donations = ({ donations }) => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 my-20">
        {donations?.map((donation) => (
          <DonationsCard key={donation.id} donation={donation}></DonationsCard>
        ))}
      </div>
    </div>
  );
};

export default Donations;
