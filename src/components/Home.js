import React from "react";
import Coins from "./Coins";
import News from "./News";
import Stats from "./Stats";

function Home() {
  const simplified = true;

  return (
    <section>
      <Stats />

      <Coins simplified={simplified} />
      <News simplified={simplified} />
    </section>
  );
}

export default Home;
