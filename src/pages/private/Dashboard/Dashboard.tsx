import axios from "axios";
import React, { useEffect, useState } from "react";
import { rapiAPIKey, weatherApiKey } from "../../../config";
import "./Dashboard.scss";
import UserList from "../UerList/UserList";
import Calculator from "../Calculator/Calculator";
import Note from "../Note/Note";
import { useNavigate } from "react-router-dom";
import { MovieModel } from "../../../Models/MovieModel";
import Weather from "../Weather/Weather";
import Player from "../Player/Player";

const Dashboard = () => {
  // retrieve stored user from local stirage
  const userAsString = localStorage.getItem("user");
  const user: any = JSON.parse(userAsString!);
  const navigate = useNavigate();

  // Hook to set movies;
  const [movies, setMovies] = useState<Array<MovieModel>>([]);

  useEffect(() => {
    // function to call on page load
    getMovies();
  }, []);

  // configuration for movie API Call
  const options = {
    method: "GET",
    url: "https://imdb-charts.p.rapidapi.com/charts",
    params: { id: "top" },
    headers: {
      "X-RapidAPI-Key": rapiAPIKey,
      "X-RapidAPI-Host": "imdb-charts.p.rapidapi.com",
    },
  };

  // function to call Movie API
  const getMovies = () => {
    axios
      .request(options)
      .then(function (response) {
        console.log("movies", response.data);
        setMovies(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 ">
      {/* Weather Widget*/}
      <div
        onClick={() => navigate("/weather")}
      >
        <Weather />
      </div>

      {/* Top Rated Movie Info Widget*/}
      <div
        onClick={() => navigate("/movie")}
        className="shadow-md flex flex-col justify-center items-center p-4 m-3 border-green cursor-pointer hover:bg-blue-50 border-green"
      >
        <h2>Top Movie</h2>
        <img className="object-cover h-16 w-16" src={movies[0]?.img} alt="movie"></img>
        <p className="my-1">Rank: {movies[0]?.rank}</p>
        <p className="my-1">{movies[0]?.title}</p>
        <p className="my-1">{movies[0]?.release}</p>
      </div>

      {/* Login User Info Widget*/}
      <div className="shadow-md flex flex-col justify-center items-center p-4 m-3 cursor-pointer hover:bg-blue-50 border-green">
        <h2>Login Uer</h2>
        <p className="my-1">Email: {user?.email}</p>
        <p className="my-1">Verified: {user?.emailVerified ? "Yes" : "NO"}</p>
        <p className="my-1">ID: {user?.uid}</p>
      </div>

      {/* User List Wdiget */}
      <div className="shadow-md p-4 m-3 cursor-pointer hover:bg-blue-50 border-green overflow-auto" onClick={() => navigate("/users")}>
        <UserList />
      </div>

      {/* Note */}
      <div className="shadow-md p-4 m-3 cursor-pointer hover:bg-blue-50 border-green">
        <Note />
      </div>

      <div className="">
        <Player />
      </div>

      {/* Calculator */}
      <div className="shadow-md p-4 m-3 cursor-pointer hover:bg-blue-50 border-green">
        <Calculator />
      </div>
    </section>
  );
};
export default Dashboard;
