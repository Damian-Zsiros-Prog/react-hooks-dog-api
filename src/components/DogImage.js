import { useState, useEffect } from "react";

export const DogImage = () => {
  const [dogImages, setdogImages] = useState([]);
  const [urlAPI, seturlAPI] = useState("");
  const fetchMovies = async () => {
    seturlAPI("https://dog.ceo/api/breeds/image/random");
    const res = await fetch(urlAPI);
    const data = await res.json();
    setdogImages(data);
  };
  useEffect(async () => {
    await fetchMovies();
  });
  return (
    <div className="w-100 d-flex justify-content-center">
      <img className="d-flex justify-content-center" src={dogImages.message} alt="" />
    </div>
  );
};
