// import logo from '../logo.svg';
import '../App.css';   
// import { Link } from "react-router-dom";
import Header from './layouts/Header';
import Hero from './sections/hero/Hero';
const MainPageContent = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
       {/* <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <p>
           Hello It's Me SM Shahadat Hossain.
         </p>
         <a
           className="App-link"
           href="https:reactjs.org"
           target="_blank"
           rel="noopener noreferrer"
         >
           Learn React
         </a>

         <Link to="/">Home</Link>
       </header> */}
     </div>
  );
};

export default MainPageContent;
