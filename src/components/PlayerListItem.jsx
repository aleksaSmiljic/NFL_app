/* eslint-disable react/prop-types */
const PlayerListItem = ({ player }) => {
  return (
    <div className="w-600px flex items-center">
      <div className="w-20 h-20">
        <img
          src={player?.espnHeadshot}
          alt="player photo"
          className="object-contain"
        />
      </div>
      <p>{player.longName}</p>
    </div>
  );
};

export default PlayerListItem;
