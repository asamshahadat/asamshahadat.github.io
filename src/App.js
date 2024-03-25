import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import MainPageContent from "./components/MainPage";
import PortfolioPage from "./components/pages/PortfolioPage"; 
import PortfolioDetailPage from "./components/pages/PortfolioDetailPage";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes> 
            <Route path="/" element={<MainPageContent />} /> 
            <Route path="/portfolio" element={<PortfolioPage />} /> 
            <Route path="/portfolio/:id" element={<PortfolioDetailPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
