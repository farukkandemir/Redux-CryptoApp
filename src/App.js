import {Route, Routes} from "react-router-dom";
import CoinDetails from "./components/CoinDetails";
import Coins from "./components/Coins";
import Home from "./components/Home";
import News from "./components/News";
import Sidebar from "./components/Sidebar";
import Statistics from "./components/Statistics";

function App() {
  return (
    <main className="min-h-screen">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/cryptocurrencies"
          element={
            <section>
              <Coins />
            </section>
          }
        />
        <Route
          path="/coin/:coinId"
          element={
            <section>
              <CoinDetails />
            </section>
          }
        />
        <Route
          path="/news"
          element={
            <section>
              <News />
            </section>
          }
        />
        <Route
          path="/statistics"
          element={
            <section>
              <Statistics />
            </section>
          }
        />
      </Routes>
    </main>
  );
}

export default App;
