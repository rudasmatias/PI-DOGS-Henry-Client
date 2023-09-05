import "./App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home.component";
import Landing from "./pages/landing/landing.component";
import Detail from "./pages/detail/detail.component";
import Create from "./pages/create/create.component";

function App() {
  return (
    <div className="body-container">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/:id" element={<Detail />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;
