import { useNavigate } from "react-router-dom";
import useTeamStore from "../stores/teamStore";

/* eslint-disable react/prop-types */
const TeamCard = ({ name, city, logo, id, team }) => {
  const { setTeam } = useTeamStore();
  const navigate = useNavigate();

  function handleTeamClick() {
    setTeam(team);
    navigate(`teamDetails/${id}`);
  }

  return (
    <div
      className="rounded-lg bg-gradient-to-r from-red-500 via-white to-blue-600 m-3"
      onClick={handleTeamClick}
    >
      <div className="flex justify-center my-6">
        <img src={logo} alt="Team Logo" className="w-[200px] h-[200px]" />
      </div>
      <p className="flex justify-center font-oswald font-medium text-3xl mb-6">
        {city} {name}
      </p>
    </div>
  );
};

export default TeamCard;
