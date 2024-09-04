import React from "react";
import Hero from "../Components/Hero";
import Biography from "../Components/Biography";

const AboutUs = () => {
  return (
    <>
      <Hero title="Learn More about us | Hospital" imageUrl={"/about.png"} />
      <Biography imageUrl={"/whoweare.png"} />
    </>
  );
};

export default AboutUs;
