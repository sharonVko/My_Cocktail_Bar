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

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<div>Contact</div>} />
          <Route path="cocktails" element={<Cocktails />} />
          <Route path="/cocktails/:id" element={<div>Cocktail Details</div>} />
        </Route>
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
