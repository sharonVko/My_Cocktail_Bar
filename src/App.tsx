import "./App.css";
import About from "./pages/about/About";
import Home from "./pages/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route />
        <Route path="/" index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<div>Contact</div>} />
        <Route path="/cocktails" element={<div>Cocktails</div>} />
        <Route path="/cocktails/:id" element={<div>Cocktail Details</div>} />
      </>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
