/* eslint-disable react/prop-types */
import PlayerListItem from "./PlayerListItem";

const Roster = ({ roster }) => {
  return (
    <div className="flex justify-center">
      <table className="w-full max-w-[2000px] bg-white border border-gray-200 m-10">
        <thead>
          <tr className="w-full bg-gray-100 border-b-2 border-gray-200">
            <th className="py-2 px-4 text-left">Player</th>
            <th className="py-2 px-4 text-left">No</th>
            <th className="py-2 px-4 text-left">Pos</th>
            <th className="py-2 px-4 text-left">Height</th>
            <th className="py-2 px-4 text-left">Weight</th>
            <th className="py-2 px-4 text-left">Experience</th>
            <th className="py-2 px-4 text-left">College</th>
          </tr>
        </thead>
        <tbody>
          {roster.map((player) => (
            <PlayerListItem key={player.playerID} player={player} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Roster;
