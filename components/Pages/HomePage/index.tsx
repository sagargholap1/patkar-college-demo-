import React from "react";

// Components
import Hero from "./sections/Hero/Hero";
import CampusKatta from "./sections/CampusKatta/CampusKatta";
import College from "./sections/College/College";
import Contact from "./sections/Contact/Contact";

const HomePage = ({ pageConfig }: any) => {
  return (
    <>
      <Hero config={pageConfig?.heroSection} />
      <College config={pageConfig?.college} />
      <CampusKatta config={pageConfig?.campusKatta} />
      <Contact config={pageConfig?.contact} />
    </>
  );
};

export default HomePage;
