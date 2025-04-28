import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home.tsx";
import Homepage from "./components/Homepage.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test-page" element={<Homepage />} />
        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  );
}

export default App;
