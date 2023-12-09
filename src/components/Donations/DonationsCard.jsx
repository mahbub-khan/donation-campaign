import { Link } from "react-router-dom";

const DonationsCard = ({ donation }) => {
  const {
    id,
    picture,
    title,
    category,
    category_bg,
    card_bg,
    text_button_color,
  } = donation || {};

  const cardBackground = {
    backgroundColor: card_bg,
  };

  const categoryBgText = {
    backgroundColor: category_bg,
    color: text_button_color,
  };

  const titleTextColor = {
    color: text_button_color,
  };

  return (
    <Link to={`/donation/${id}`} className="flex flex-col">
      <div className="flex flex-col flex-grow">
        <div className="rounded-lg flex-grow" style={cardBackground}>
          <div>
            <img
              className="w-full md:h-[320px] lg:h-[205px] rounded-t-lg"
              src={picture}
            />
          </div>
          <div className="p-4  flex flex-col">
            <h2
              className="text-sm font-medium p-2 rounded-lg w-[90px] text-center"
              style={categoryBgText}
            >
              {category}
            </h2>
            <h1
              className="pt-3 text-xl font-semibold flex-grow"
              style={titleTextColor}
            >
              {title}
            </h1>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DonationsCard;
