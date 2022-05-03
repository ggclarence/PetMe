import React,{useState} from "react";
import "./Header.css"
import Modal from "./Modal";
function Header({logo}){
    const [filter,setFilter] = useState("")
    const [openModal, setOpenModal] = useState(false)
    
    function handleClick(event){
        setFilter(event.target.value)
    // this will send a fetch request to the database
    }

    function closeModal(){
        setOpenModal(false)
    }


    return(
        <div id="containterHead">
        <img id="logo" src={logo} alt="logo" onClick={event =>  window.location.href='/'} ></img>
        <select  class="filterSelect"onChange={handleClick}>
            <option>All</option>
            <option>Dogs</option>
            <option>Cats</option>
            <option>Bunnies</option>
            <option>Other</option>
        </select>

        <button id="sumbitButton" onClick={()=>{setOpenModal(true)}}></button>
        <button id="profileHeader"></button>

       { openModal && <Modal closeModal={closeModal}/>}



            
        </div>
        

    )
}

export default Header