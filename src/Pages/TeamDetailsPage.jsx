/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import useTeamStore from "../stores/teamStore";
import Roster from "../components/Roster";
import Loader from "../components/Loader";

const TeamDetailsPage = () => {
  const [roster, setRoster] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { team } = useTeamStore();

  useEffect(() => {
    getTeam();
  }, []);

  const getTeam = () => {
    setIsLoading(true);
    axios
      .get(
        `https://tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com/getNFLTeamRoster`,
        {
          headers: {
            "x-rapidapi-key":
              "52fef31e26msh25dec2f334931c2p1361b6jsn2629877b7a21",
            "x-rapidapi-host":
              "tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com",
          },
          params: {
            teamID: `${team.teamID}`,
            getStats: "true",
          },
        }
      )
      .then((response) => {
        console.log(response);
        setRoster(response.data.body.roster);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="bg-gray-800">
      <p>{team.teamName}</p>
      {isLoading ? <Loader /> : <Roster roster={roster} />}
    </div>
  );
};

export default TeamDetailsPage;
