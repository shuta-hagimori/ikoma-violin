import "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./page/home/Home";
import TopImage from "./img/violin.jpeg";

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ marginTop: 83 }}>
        <img
          className="fade"
          src={TopImage}
          style={{ width: "100%", maxHeight: 300, objectFit: "cover" }}
        />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
