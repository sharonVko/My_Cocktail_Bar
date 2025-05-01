import PreviewCard from "../components/previewCard/PreviewCard";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p className="text-amber-700">
        Welcome to my Cocktail Bar! Enjoy your drink 🍸
      </p>
      <section className="text-center border-2 border-amber-500 shadow-lg p-4 rounded-lg mt-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Cocktail of the Day
        </h2>
        <div className="bg-gray-200 p-4 rounded-lg shadow-md">
          <PreviewCard />
        </div>
      </section>
    </div>
  );
};

export default Home;
