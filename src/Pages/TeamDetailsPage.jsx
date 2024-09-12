/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import useTeamStore from "../stores/teamStore";
import Roster from "../components/Roster";
import Loader from "../components/Loader";
import TeamDetailsHeader from "../components/TeamDetailsHeader";
import TeamNews from "../components/TeamNews";

const TeamDetailsPage = () => {
  const [roster, setRoster] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showNews, setShowNews] = useState(false);
  const [news, setNews] = useState([]);
  const { team } = useTeamStore();
  // const apiKey = import.meta.env.VITE_RAPID_NFL_API_KEY;

  useEffect(() => {
    getTeam();
    getTeamNews();
  }, []);

  const getTeamNews = () => {
    setIsLoading(true);
    axios
      .get(
        `https://tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com/getNFLNews`,
        {
          headers: {
            "x-rapidapi-key":
              "52fef31e26msh25dec2f334931c2p1361b6jsn2629877b7a21",
            "x-rapidapi-host":
              "tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com",
          },
          params: {
            teamID: `${team.teamID}`,
            teamAbv: `${team.teamAbv}`,
            fantasyNews: "false",
            recentNews: "true",
            maxItems: "12",
          },
        }
      )
      .then((response) => {
        console.log(response);
        setNews(response.data.body);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };

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

  const stats = `${team.wins}/${team.loss}/${team.tie}`;

  return (
    <div className="bg-gray-800">
      <TeamDetailsHeader
        teamCity={team.teamCity}
        teamName={team.teamName}
        teamLogo={team.espnLogo1}
        conference={team.conferenceAbv}
        stats={stats}
        division={team.division}
        setShowNews={setShowNews}
        showNews={showNews}
      />
      {isLoading ? (
        <Loader />
      ) : showNews ? (
        <TeamNews
          teamID={team.teamID}
          setIsLoading={setIsLoading}
          news={news}
        />
      ) : (
        <Roster roster={roster} />
      )}
    </div>
  );
};

export default TeamDetailsPage;
