import { useLoaderData } from "react-router-dom";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

import { Chart } from "react-google-charts";

const Statistics = () => {
  const donations = useLoaderData();

  const totalPriceCalculator = (donations) => {
    const totalDonation = donations.reduce((totalPrice, donation) => {
      const priceStr = donation.price.split("$");
      const priceNum = Number(priceStr[1]);

      return totalPrice + priceNum;
    }, 0);
    return totalDonation;
  };

  const myDonations = JSON.parse(localStorage.getItem("donations"));

  let myDonationTotal = 0;

  if (myDonations) {
    myDonationTotal = totalPriceCalculator(myDonations);
  }
  //console.log(donations);

  const totalDonationPossible =
    totalPriceCalculator(donations) - myDonationTotal;

  const data = [
    ["Name", "Percentage"],
    ["Your Donation", myDonationTotal],
    ["Remaining Amount", totalDonationPossible],
  ];

  const options = {
    title: "Donation Details",
    is3D: true,
  };

  return (
    <div>
      <div className="max-w-[800px] mx-auto my-20">
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={"100%"}
          height={"400px"}
        />
      </div>
    </div>
  );
};

export default Statistics;
