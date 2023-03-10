import axios from "axios";
import React, { useEffect, useState } from "react";
import { rapiAPIKey, weatherApiKey } from "../../../config";
import "./Dashboard.scss";
import UserList from "../../../components/UerList/UserList";
import Calculator from "../../../components/Calculator/Calculator";
import Note from "../../../components/Note/Note";
import { useNavigate } from "react-router-dom";
import { MovieModel } from "../../../Models/MovieModel";
import Weather from "../../../components/Weather/Weather";

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
    <section className="flex">
      {/* Weather Widget*/}
      <Weather />

      {/* Top Rated Movie Info Widget*/}
      <div
        onClick={() => navigate("/movie")}
        className="shadow-md flex flex-col justify-center items-center p-4 m-3"
      >
        <h2>Top Movie</h2>
        <p className="my-1">Rank: {movies[0]?.rank}</p>
        <p className="my-1">{movies[0]?.title}</p>
        <p className="my-1">{movies[0]?.release}</p>
        <img src={movies[0]?.img} alt="movie"></img>
      </div>

      {/* Login User Info Widget*/}
      <div className="shadow-md flex flex-col justify-center items-center p-4 m-3">
        <h2>Login Uer</h2>
        <p className="my-1">Email: {user?.email}</p>
        <p className="my-1">Verified: {user?.emailVerified ? "Yes" : "NO"}</p>
        <p className="my-1">ID: {user?.uid}</p>
      </div>

      {/* User List Wdiget */}
      <div onClick={() => navigate("/users")}>
        <UserList />
      </div>

      {/* Movie Wdiget  */}
      <div></div>

      {/* Note */}
      <Note />

      {/* Calculator */}
      <Calculator />
    </section>
  );
};
export default Dashboard;
