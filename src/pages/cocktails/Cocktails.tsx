import { Cocktail } from "../../App";
import PreviewCard from "../../components/previewCard/PreviewCard";

interface ICocktailsProps {
  cocktails: Cocktail[];
}

const Cocktails: React.FC<ICocktailsProps> = ({ cocktails }) => {
  console.log("Cocktails prop:", cocktails);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-amber-200 px-4 py-4">
      <h1 className="text-4xl font-bold text-lime-100 mb-4">Cocktails</h1>
      <p className="text-lg text-gray-400">Explore our cocktail recipes!</p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cocktails && cocktails.length > 0 ? (
          cocktails.map((cocktail) => (
            <PreviewCard key={cocktail.idDrink} cocktail={cocktail} />
          ))
        ) : (
          <p>Loading Cocktails...</p>
        )}
      </div>
    </div>
  );
};

export default Cocktails;
