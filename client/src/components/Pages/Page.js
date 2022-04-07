import React from "react";
import About from "../About/About";
import Appointment from "../Appointment/Appointment";
import Service from "../Service/Service";
import Slider from "../Slider/Slider";
import Header from "./Sub_pages/Header";

const Page = () => {
  return (
    <>
      <Header />
      <About />
      <Service />
      <Appointment />
      <Slider />
    </>
  );
};

export default Page;
