// import logo from '../logo.svg';
import '../App.css';   
// import { Link } from "react-router-dom";
import Header from './layouts/Header';
import WhoIam from './sections/about/WhoAmi';
import Hero from './sections/hero/Hero';
const MainPageContent = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <WhoIam />
       {/* <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <a
           className="App-link"
           href="https:reactjs.org"
           target="_blank"
           rel="noopener noreferrer"
         >
           Learn React
         </a>
       </header> */}
     </div>
  );
};

export default MainPageContent;
