/* eslint-disable react/prop-types */
const PlayerListItem = ({ player }) => {
  return (
    <div>
      <img src={player?.espnHeadshot} alt="player photo" />
      <p>{player.longName}</p>
    </div>
  );
};

export default PlayerListItem;
