import swal from "sweetalert";

const DonationCard = ({ donation }) => {
  const {
    id,
    picture,
    title,
    category,
    category_bg,
    card_bg,
    text_button_color,
    description,
    price,
  } = donation || {};

  //   const priceStr = price.split("$");
  //   const priceNum = Number(priceStr[1]);

  const btnbgColor = {
    backgroundColor: text_button_color,
    borderColor: text_button_color,
  };

  const handleDonate = () => {
    const addToMyDonationArray = [];

    const myDonationItems = JSON.parse(localStorage.getItem("donations"));

    if (!myDonationItems) {
      addToMyDonationArray.push(donation);
      localStorage.setItem("donations", JSON.stringify(addToMyDonationArray));
      swal("Good job!", `You've donated ${price} for: "${title}"`, "success");
    } else {
      const isExist = myDonationItems.find((donation) => donation.id === id);

      if (!isExist) {
        addToMyDonationArray.push(...myDonationItems, donation);
        localStorage.setItem("donations", JSON.stringify(addToMyDonationArray));
        swal("Good job!", `You've donated ${price} for: "${title}"`, "success");
      } else {
        swal(
          "Hey there!",
          `You already donated ${price} for: "${title}". Please, try to donate for other options.`,
          "info"
        );
      }
    }
  };

  return (
    <div>
      <div className="px-8">
        <div className="w-full relative">
          <img className="w-full rounded-lg" src={picture} alt="" />

          <div className="bg-black/40 h-[80px] sm:h-[100px] flex items-center absolute bottom-0 left-0 w-full rounded-b-xl">
            <button
              className="btn ml-6 text-white"
              style={btnbgColor}
              onClick={handleDonate}
            >
              Donate {price}
            </button>
          </div>
        </div>

        <div className="mt-10">
          <h1 className="text-4xl font-bold mb-6 text-[#0B0B0B]">{title}</h1>
          <p className="text-base font-normal text-[#0B0B0BB2]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
