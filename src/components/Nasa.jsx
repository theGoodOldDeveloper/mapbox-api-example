import React, { useState, useEffect } from "react";
import axios from "axios";

const Nasa = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=XhVxNWfSieN2ybq0jYJdEc8AB6n0SOOcUczj9ort"
      )
      .then((response) => setData(response.data))
      .catch((error) =>
        console.error("Error fetching data from NASA API:", error)
      );
  }, []);

  return (
    <div>
      <h2>NASA Astronomy Picture of the Day</h2>
      {data ? (
        <div>
          <h3>{data.title}</h3>
          <img src={data.url} alt={data.title} style={{ maxWidth: "100%" }} />
          <p>{data.explanation}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Nasa;

/* export default function Nasa() {
  return (
    <div>
      <h1>Nasa 💖</h1>
    </div>
  );
}
 */
