import React from "react";
//Components
import { Home } from "../components/Home";
import { Karriere } from "../components/Karriere";
import { Service } from "../components/Service";
import { Unternehmen } from "../components/Unternehmen";
import { Vorteile } from "../components/Vorteile";
import { Kontakt } from "../components/Kontakt";

export const Startseite = () => {
  return (
    <div>
      <Home />
      <Service />
      <Vorteile />
      <Unternehmen />
      <Karriere />
      <Kontakt />
    </div>
  );
};
