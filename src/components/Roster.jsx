/* eslint-disable react/prop-types */
import PlayerListItem from "./PlayerListItem";

const Roster = ({ roster }) => {
  return (
    <div>
      <ul>
        {roster.map((player) => (
          <PlayerListItem key={player.playerID} player={player} />
        ))}
      </ul>
    </div>
  );
};

export default Roster;
