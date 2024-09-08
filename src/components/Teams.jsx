import TeamCard from "./TeamCard";

/* eslint-disable react/prop-types */
const Teams = ({ teams }) => {
  return (
    <div>
      <ul className="grid grid-cols-4">
        {teams.map((team) => (
          <TeamCard
            name={team.teamName}
            city={team.teamCity}
            logo={team.espnLogo1}
            key={team.teamID}
            id={team.teamID}
            team={team}
          />
        ))}
      </ul>
    </div>
  );
};

export default Teams;
