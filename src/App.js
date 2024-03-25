import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import MainPageContent from "./components/MainPage";
import PortfolioPage from "./components/pages/PortfolioPage";
 
const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes> 
            <Route path="/" element={<MainPageContent />} /> 
            <Route path="/portfolio" element={<PortfolioPage />} /> 
        </Routes>
      </Router>
    </div>
  );
};

export default App;
