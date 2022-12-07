import './App.css'
import Home from './components/home/Home';
import Ottica from './components/ottica/Ottica'
import Storia from './components/storia/Storia'
import Visite from './components/visite/Visite'
import NavBar from './components/navBar/NavBar';
import Footer from './components/footer/Footer';
import { Routes, Route, BrowserRouter } from 'react-router-dom';



function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Storia" element={<Storia />} />
        <Route path="/Ottica" element={<Ottica />} />
        <Route path="/Visite" element={<Visite />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
    
  )
}

export default App;
