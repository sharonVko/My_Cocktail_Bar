import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

const RootLayout = () => {
  return (
    <>
      <Header />
      <main className="flex-grow p-4">
        <Outlet />
      </main>
      <footer className="bg-gray-800 text-white p-4">Footer</footer>
    </>
  );
};

export default RootLayout;
