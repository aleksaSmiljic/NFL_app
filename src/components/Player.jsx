const Player = ({ image, key }) => {
  return (
    <li key={key}>
      <p>{name}</p>
      <img src={image} alt="player image" />
    </li>
  );
};

export default Player;
