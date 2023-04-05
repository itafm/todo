import { Route, Routes, topbar } from "react-router-loading";
import Header from "./components/Header";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Contacts } from "./pages/Contacts";
import Projects from "./pages/Projects";




topbar.config({
  barColors: {
    0: "rgb(229, 11, 11)",
    0.3: "rgb(229, 11, 11)",
    1.0: "rgb(229, 11, 11)",
  },
});

function App() {
  return (
    <>
      <Header />
      <Routes maxLoadingTime={500}>
        <Route path="/about" element={<About />} loading />
        <Route path="/" element={<Home />} loading />
        <Route path="/services" element={<Services />} loading />
        <Route path="/pro-jects" element={<Projects />} loading />
        <Route path="/con-tacts" element={<Contacts />} loading />
      </Routes>
    </>
  );
}

export default App;
