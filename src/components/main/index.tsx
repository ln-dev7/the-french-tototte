import React from "react";
import Hero from "./hero";
import Bento from "./bento";
import PlugNTote from "./plug-n-tote";
import Flavors from "./flavors";
import Presentation from "./presentation";
import Spotify from "./spotify";
import Mynthos from "./mynthos";

export default function Main() {
  return (
    <main className="pb-40">
      <Hero />
      <Bento />
      <PlugNTote />
      <Flavors />
      <Presentation />
      <Spotify />
      <Mynthos />
    </main>
  );
}
