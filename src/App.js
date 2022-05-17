import { Routes, Route } from "react-router-dom";

//Components
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Startseite } from "./pages/Startseite";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Startseite />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
