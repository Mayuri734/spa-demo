
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Header from './Pages/Header';
import Navbar from './Pages/Navbar';
import Footer from './Pages/Footer';
import Home from './Pages/Nevagations/Home';
import About from './Pages/Nevagations/About';
import Product  from './Pages/Nevagations/Product';
import Contact from  './Pages/Nevagations/Contact';
import Services from  './Pages/Nevagations/Services';

function App() {
  return (
    <div className="App">
    <Header/>
    <Navbar/>
    <Routes>
    <Route path="/Home" element={<Home/>}></Route>
    <Route path="/About" element={<About/>}></Route>
    <Route path="/Contact" element={<Contact/>}></Route>
    <Route path="/Services" element={<Services/>}></Route>
    <Route path="/Product" element={<Product/>}></Route>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
