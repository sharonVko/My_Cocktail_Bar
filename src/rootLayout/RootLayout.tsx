import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import React from "react";
import { Cocktail } from "../App";

interface IRootLayoutProps {
  cocktails: Cocktail[];
}

const RootLayout: React.FC<IRootLayoutProps> = ({ cocktails }) => {
  return (
    <>
      <Header cocktails={cocktails} />
      <main className="flex-grow p-4">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
