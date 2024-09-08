/* eslint-disable react/prop-types */
import Loader from "../components/Loader";
import Teams from "../components/Teams";

const HomePage = ({ isLoading, teams }) => {
  return (
    <div className="bg-gray-800">
      {isLoading ? <Loader /> : <Teams teams={teams} />}
    </div>
  );
};

export default HomePage;
