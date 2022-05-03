import './App.css';
import {Route, Routes } from "react-router-dom";
import Home from './component/Home';
import Header from './component/Header/Header';
import Logo from './images/logo.jpg'
function App() {
  return (
    <div>
      <Header logo={Logo}/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  );
}


export default App;
