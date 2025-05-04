import React from "react";
import { Cocktail } from "../../App";
interface IPreviewCardProps {
  cocktail: Cocktail;
}

const PreviewCard: React.FC<IPreviewCardProps> = ({ cocktail }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-full"
        src={cocktail.strDrinkThumb}
        alt={cocktail.strDrink}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{cocktail.strDrink}</div>
        <p className="text-gray-400 text-base">
          {cocktail.strInstructions
            ? cocktail.strInstructions.substring(0, 100) + "..."
            : "Kein Rezept verfügbar."}
        </p>
      </div>
    </div>
  );
};

export default PreviewCard;
