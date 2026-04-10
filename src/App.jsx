import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import CounterContainer from "./counter/components/CounterContainer";

function Home() {
  return <h1>Home</h1>;
}

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/counter">Counter</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<CounterContainer />} />
      </Routes>
    </div>
  );
}

export default App;
