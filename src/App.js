import Layout from './components/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import ErrorPage from './components/ErrorPage/index.jsx'
import Sidebar from './components/Sidebar';
import Project from './components/Project/index'

function App() {
  return (
    <>
    <Router basename='ReactPTFDeplo' >
      <Sidebar />      
      <Routes>        
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />          
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
        <Route path='/project' element={<Project />} />
        <Route path='*' element={<ErrorPage />} />             
      </Routes>       
    </Router>
    </>
  );
}

export default App;