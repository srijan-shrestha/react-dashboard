import axios from "axios";
import { useEffect, useState } from "react";
import { rapiAPIKey } from "../../../config";
import { MovieModel } from "../../../Models/MovieModel";

const Movie = () => {
  const [movies, setMovies] = useState<Array<MovieModel>>([]);

  // hook to trigger function on component load
  useEffect(() => {
    // function to call on page load
    topMovies();
  }, []);

  // configuration for movie API call
  const options = {
    method: "GET",
    url: "https://imdb-charts.p.rapidapi.com/charts",
    params: { id: "top" },
    headers: {
      "X-RapidAPI-Key": rapiAPIKey,
      "X-RapidAPI-Host": "imdb-charts.p.rapidapi.com",
    },
  };

  // function to call movie API
  const topMovies = () => {
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
    <section className="">
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="p-1.5 w-full inline-block align-middle">
            <div className="overflow-hidden border rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
                    >
                      Rank
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
                    >
                      Release
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {movies.map((movie: MovieModel) => (
                    <tr key={movie.rank}>
                      <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        {movie.rank}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        {movie.title}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        {movie.release}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Movie;
