/* eslint-disable react/prop-types */

const TeamDetailsHeader = ({
  teamCity,
  teamName,
  teamLogo,
  stats,
  conference,
  division,
  setShowNews,
}) => {
  return (
    <>
      <div
        className={`w-full flex justify-evenly bg-gradient-to-r from-[#111111]`}
      >
        <div>
          <p className="text-5xl text-white font-oswald font-bold my-4">
            {teamCity} {teamName}
          </p>
          <p className="text-2xl text-white font-oswald font-light ">
            {conference} {division}
          </p>
          <p className="text-2xl text-white font-oswald font-light ">{stats}</p>
        </div>
        <div className="w-[200px] h-[200px]">
          <img src={teamLogo} alt="Team Logo" className="object-contain" />
        </div>
      </div>
      <div className="w-full flex justify-center">
        <button
          onClick={() => setShowNews(false)}
          className={`w-[200px] h-10 border border-red-500`}
        >
          Roster
        </button>
        <button
          onClick={() => setShowNews(true)}
          className="w-[200px] h-10 border border-red-500"
        >
          News
        </button>
      </div>
    </>
  );
};

export default TeamDetailsHeader;
