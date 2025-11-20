"use client";

import { useState, useEffect } from "react";

export const Home: React.FC = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://restcountries.com/v3.1/all?fields=name`
      );
      const res = await response.json();
      setData(res);
      console.log(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      {data ? (
        <p>
          {data.map((country, i) => (
            <div key={i}>{country.name}</div>
          ))}
        </p>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
};
