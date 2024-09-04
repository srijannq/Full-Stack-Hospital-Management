import React from "react";
import AppointmentForm from "../Components/AppointmentForm";
import Hero from "../Components/Hero";

function Appointment() {
  return (
    <>
      <Hero
        title="Schedule Your appointment | Hospital"
        imageUrl={"/signin.png"}
      />
      <AppointmentForm />
    </>
  );
}

export default Appointment;
