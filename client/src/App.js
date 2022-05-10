import './App.css';
import React, {useEffect,useState} from 'react';
import {Route, Routes } from "react-router-dom";
import Home from './component/Home';
import Header from './component/Header/Header';
import Logo from './images/logo.jpg'
import Profile from './component/Body/Profile';
import Modal from "./component/Header/Modal";
import swal from 'sweetalert';
function App() {

  const [openUploadModal, setOpenUploadModal] = useState(false)
  const [user, setUser] = useState()
  useEffect(() => {
  fetch("/me").then((response) => {
    if (response.ok) {
      response.json().then((user) => setUser(user));
    }
  });
}, []);
// useEffect(() => {
//   fetch("/users")
//   .then(response=>response.json())
//   .then(data=>console.log(data))
// }, []);
function onLogin(user){
  setUser(user)
}

function OpenUploadModal(data){
  setOpenUploadModal(data)
  console.log("test")
}
function closeUploadModal(){
  setOpenUploadModal(false)
}
function uploadSuccess(){
  swal("Congrats!", ", Your post has been created!", "success")
}

  return (
    <div className='app'>
      <Header logo={Logo} user={user} setOpenUploadModal={OpenUploadModal}/>
      { openUploadModal && <Modal closeUploadModal={closeUploadModal} uploadSuccess={uploadSuccess}/>}
      <Routes>
        <Route exact path="/" element={<Home onLogin={onLogin}user={user} modalUploadStatus={openUploadModal}/>} />
        
        
        <Route path="/:username" element={<Profile user={user}/>}/>
      
      </Routes>
      
    </div>
  );
}


export default App;
