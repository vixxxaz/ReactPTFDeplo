import Layout from './components/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import ErrorPage from './components/ErrorPage.jsx';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
    <Router>
      <Sidebar />
      <Routes>
         
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Route>       
      </Routes>
      <Route path='*' element={<ErrorPage />} /> 
    </Router>
    </>
  );
}

export default App;