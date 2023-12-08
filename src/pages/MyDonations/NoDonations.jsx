import { Link } from "react-router-dom";

const NoDonations = () => {
  return (
    <div>
      <div className="px-8">
        <h1 className="text-5xl font-semibold text-center">
          You haven't made any donations yet!! 🙂
        </h1>
        <Link to="/">
          <button className="btn btn-outline btn-success block mx-auto font-semibold text-lg my-10">
            Go to Homepage
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NoDonations;
