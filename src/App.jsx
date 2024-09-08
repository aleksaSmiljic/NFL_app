import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import HomePage from "./Pages/HomePage";

function App() {
  const [teams, setTeams] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getNFLTeams();
  }, []);

  const getNFLTeams = () => {
    setIsLoading(true);
    axios
      .get(
        `https://tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com/getNFLTeams`,
        {
          headers: {
            "x-rapidapi-key":
              "52fef31e26msh25dec2f334931c2p1361b6jsn2629877b7a21",
            "x-rapidapi-host":
              "tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com",
          },
          params: {
            sortBy: "standings",
            rosters: "false",
            schedules: "false",
            topPerformers: "false",
            teamStats: "true",
            teamStatsSeason: "2023",
          },
        }
      )
      .then((response) => {
        console.log(response);
        setTeams(response.data.body);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      {/* {isLoading ? <Loader /> : <Teams teams={teams} />} */}
      <HomePage isLoading={isLoading} teams={teams} />
    </>
  );
}

export default App;
