const Cocktails = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800 text-amber-200">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Cocktails</h1>
      <p className="text-lg text-gray-600">Explore our cocktail recipes!</p>
      <div className="mt-8">
        <img src="/cocktail.png" alt="Cocktail" className="w-64 h-64" />
      </div>
    </div>
  );
};

export default Cocktails;
