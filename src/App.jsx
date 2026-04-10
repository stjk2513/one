import { Routes, Route } from "react-router-dom";
import "./App.css";
import CounterContainer from "./counter/components/CounterContainer";
import TopNav from "./components/TopNav";

function Home() {
  return <h1>Home</h1>;
}

function App() {
  return (
    <div>
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<CounterContainer />} />
      </Routes>
    </div>
  );
}

export default App;
