import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Footer from "./components/Footer.jsx"; // Import the Footer component

function App() {
  return (
    <Router>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Routes style={{ flex: 1 }}>
          <Route exact path="/" element={<Index />} />
        </Routes>
        <Footer /> {/* Add the Footer component */}
      </div>
    </Router>
  );
}

export default App;
