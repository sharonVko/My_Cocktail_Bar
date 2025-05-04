import React from "react";
import PreviewCard from "../components/previewCard/PreviewCard";
import { Cocktail } from "../App";

interface IHomeProps {
  cocktails: Cocktail[];
}
const Home: React.FC<IHomeProps> = ({ cocktails }) => {
  const cocktailOfTheDay =
    cocktails && cocktails.length > 0 ? cocktails[0] : null;

  return (
    <div className="bg-gray-800  flex flex-col items-center justify-center min-h-screen px-4">
      <p className="text-lime-100 text-3xl font-bold mb-4 ">
        Welcome to my Cocktail Bar! Enjoy your drink 🍸
      </p>
      <section className="text-center border-2 border-amber-200 shadow-lg p-4 rounded-lg mt-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Cocktail of the Day
        </h2>
        <div className="bg-gray-200 p-4 rounded-lg shadow-md">
          {cocktailOfTheDay ? (
            <PreviewCard cocktail={cocktailOfTheDay} />
          ) : (
            <p>Kein Cocktail verfügbar.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
