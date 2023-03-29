import { Route, Routes, topbar } from "react-router-loading";
import { Header } from "./components/Header";
import AddTask from "./pages/AddTask";
import { Home } from "./pages/Home";

topbar.config({
  autoRun: false,
  barThickness: 5,
  barColors: {
    0: "rgba(26,  188, 156, .7)",
    0.3: "rgba(41,  128, 185, .7)",
    1.0: "rgba(231, 76,  60,  .7)",
  },
  shadowBlur: 5,
  shadowColor: "red",
  className: "topbar",
});

function App() {
  return (
    <>
      <Header />
      <Routes maxLoadingTime={500}>
        <Route path="/add-task" element={<AddTask />} loading />
        <Route path="/" element={<Home />} loading />
      </Routes>
    </>
  );
}

export default App;
