import { Link } from "react-router-dom";

const MyDonationsCard = ({ donation }) => {
  const {
    id,
    picture,
    title,
    category,
    category_bg,
    card_bg,
    text_button_color,
    price,
  } = donation || {};

  const cardBackground = {
    backgroundColor: card_bg,
  };
  const categoryBgAndText = {
    backgroundColor: category_bg,
    color: text_button_color,
  };

  const priceTextColor = {
    color: text_button_color,
  };

  const buttonBgColor = {
    backgroundColor: text_button_color,
    borderColor: text_button_color,
  };

  return (
    <div>
      <div className="card card-side shadow-md" style={cardBackground}>
        <figure className="w-[220px]">
          <img src={picture} alt="Movie" className="h-full" />
        </figure>
        <div className="card-body">
          <h2
            className="py-1 rounded-lg inline-block text-sm font-normal w-[90px] text-center"
            style={categoryBgAndText}
          >
            {category}
          </h2>
          <h1 className="card-title text-xl font-semibold py-1">{title}</h1>
          <h2
            className="pb-2 rounded-lg text-sm font-medium"
            style={priceTextColor}
          >
            Amount: {price}
          </h2>
          <Link to={`/donation/${id}`}>
            <button
              className="text-white py-2 rounded-lg w-[120px]"
              style={buttonBgColor}
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyDonationsCard;
