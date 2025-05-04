import "./App.css";
import About from "./pages/about/About";
import Cocktails from "./pages/cocktails/Cocktails";
import Home from "./pages/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./rootLayout/RootLayout";
import { useEffect, useState } from "react";

export type Cocktail = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strInstructions?: string;
};

function App() {
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);

  useEffect(() => {
    const fetchCocktails = async () => {
      try {
        const response = await fetch(
          "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        // Die API liefert die Cocktails im Feld "drinks"
        setCocktails(data.drinks || []);
        console.log("Fetched cocktails:", data.drinks);
      } catch (error) {
        console.error("Fehler beim Abrufen der Cocktails:", error);
      }
    };

    fetchCocktails();
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<RootLayout cocktails={cocktails} />}>
          <Route index element={<Home cocktails={cocktails} />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<div>Contact</div>} />
          <Route
            path="cocktails"
            element={<Cocktails cocktails={cocktails} />}
          />
          <Route
            path="/cocktails/:id"
            element={<Cocktails cocktails={cocktails} />}
          />
        </Route>
      </>
    )
  );
  console.log("Cocktails in App component:", cocktails);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
