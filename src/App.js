
import './App.css'; 
import Footer from './Components/Footer.jsx';
import Navbar from './Components/Navbar.jsx';
import NewArrival from './Pages/NewArrival.jsx';
import Collection from './Pages/Collection.jsx';
import CustomStudio from './Pages/CustomStudio.jsx';
import TrackOrder from './Pages/TrackOrder.jsx';
import SignIn from './Pages/SignIn.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom';
function App() {
  return (
    <div className="about-container">
    <Router>
      <Navbar></Navbar>
      <Routes>
         <Route path ="/" excat Component={NewArrival}></Route>
         <Route path ="/Collection" excat Component ={Collection}></Route>
         <Route path ="/CustomStudio" excat Component ={CustomStudio}></Route>
         <Route path ="/TrackOrder" excat Component ={TrackOrder}></Route>
         <Route path="/About" excat Component={About}></Route>
         <Route path="/Contact" excat Component={Contact}></Route>
         <Route path="/SignIn" excat Component={SignIn}></Route>
         
      </Routes>


      <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
