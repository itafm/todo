import { Route, Routes, topbar } from "react-router-loading";
import { Header } from "./components/Header";
import AddTask from "./pages/AddTask";
import { Home } from "./pages/Home";

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
        <Route path="/add-task" element={<AddTask />} loading />
        <Route path="/" element={<Home />} loading />
      </Routes>
    </>
  );
}

export default App;
