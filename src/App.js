import logo from './logo.svg';
import './App.css';
import Greet from './greet'
import Greeting from './Greeting'
import GreetClass from './GreetClass';
import StateClass from './StateClass';
import StateFunction from './StateFunction';
import { Routes, Route, Link } from 'react-router-dom';
import UI from './Ui';
import Sum from './Sum';
import AllRecords from './AllRecords';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Layout from './pages/layout';
import ViewRecord from './ViewRecord1';
function App() {

  const oneHandler = () => {
    alert("First clicked");
  }
  const secondHandler = () => {
    alert("second clicked");
  }
  return (
    <div className="App">
      {/* <a href="/">Home </a> | <a href="/about">About us</a> | <a href='/contact'>Contact us</a> | <a href="/all">Users </a> */}

      <Routes>
        <Route path='/' element={<Layout />}>
        <Route path='home' element={<Home />}/>
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />

          <Route path='all' element={<AllRecords />} />
          <Route path='View/:x' element={<ViewRecord />} />
        </Route>

      </Routes>


    </div>
  );
}

export default App;
