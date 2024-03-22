import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import MainPageContent from "./components/MainPage";
 
const App = () => {
  return (
    <Router>
      <Routes> 
          <Route path="/" element={<MainPageContent />} /> 
      </Routes>
    </Router>
  );
};

export default App;
