const NoDataFound = ({ catFilterSearch }) => {
  return (
    <div>
      <div className="">
        <div className="max-w-7xl px-8 mx-auto">
          <h1 className="text-4xl font-bold whitespace-nowrap ">
            No data found for &quot;<span>{catFilterSearch}</span>&quot;
            category
          </h1>
        </div>
      </div>
    </div>
  );
};

export default NoDataFound;
