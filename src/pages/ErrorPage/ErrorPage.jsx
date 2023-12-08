import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="max-w-7xl h-screen mx-auto flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[#9a9a9a]">
          Sorry, we couldn't find this page ☹️
        </h1>
        <h2 className="text-2xl font-semibold py-5">
          But don't worry we have plenty of other things on our homepage 😀
        </h2>
        <Link to="/">
          <button className="btn btn-success text-white">
            Go to Homepage 🏠
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
