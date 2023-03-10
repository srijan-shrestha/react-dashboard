import axios from "axios";
import { useState, useEffect } from "react";
import { rapiAPIKey } from "../../../config";

const Player = () => {
  // hook to set player data
  const [player, setPlayer] = useState<any>(null);

  // hook to call specific function on component load
  useEffect(() => {
    // function to call on page load
    getPlayer();
  }, []);

  // configuration for player API call
  const options = {
    method: "GET",
    url: "https://sofascores.p.rapidapi.com/v1/players/data",
    params: { player_id: "12994" },
    headers: {
      "X-RapidAPI-Key": rapiAPIKey,
      "X-RapidAPI-Host": "sofascores.p.rapidapi.com",
    },
  };

  const getPlayer = () => {
    axios
      .request(options)
      .then(function (response: any) {
        console.log(response.data);
        setPlayer(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div className="shadow-md border-green cursor-pointer hover:bg-blue-50 flex flex-col justify-center items-center p-4 m-3">
        <h2>{player?.data?.name}</h2>
        <p>Number: {player?.data?.shirtNumber}</p>
        <p>Team: {player?.data?.team?.name}</p>
        <p>Country: {player?.data?.country?.name}</p>
    </div>
  );
};

export default Player;
