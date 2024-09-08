/* eslint-disable react/prop-types */
import PlayerListItem from "./PlayerListItem";

const Roster = ({ roster }) => {
  return (
    <div className="flex justify-center">
      <ul className="grid col-span-1">
        {roster.map((player) => (
          <PlayerListItem key={player.playerID} player={player} />
        ))}
      </ul>
    </div>
  );
};

export default Roster;
