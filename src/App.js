import { Routes, Route } from "react-router-dom";

//Components
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Startseite } from "./pages/Startseite";
import { ScrollToTop } from "./components/ScrollToTop";
import { Datenschutz } from "./pages/Datenschutz";
import { Impressum } from "./pages/Impressum";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Startseite />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/impressum" element={<Impressum />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
