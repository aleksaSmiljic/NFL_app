/* eslint-disable react/prop-types */
const PlayerListItem = ({ player }) => {
  return (
    <tr className="border-b">
      <td className="py-2 h-28 w-28 flex items-center mx-4">
        <img
          src={player.espnHeadshot}
          alt="Player photo"
          className="object-contain mr-4"
        />
        <p className="whitespace-nowrap">{player.longName}</p>
      </td>
      <td className="py-2 px-4">{player.jerseyNum}</td>
      <td className="py-2 px-4">{player.pos}</td>
      <td className="py-2 px-4">{player.height}</td>
      <td className="py-2 px-4">{player.weight}</td>
      <td className="py-2 px-4">{player.exp}</td>
      <td className="py-2 px-4">{player.school}</td>
    </tr>
  );
};

export default PlayerListItem;
