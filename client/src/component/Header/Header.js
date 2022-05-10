import React,{useState} from "react";
import "./Header.css"

function Header({logo,user,setOpenUploadModal}){
    const [filter,setFilter] = useState("")
    
    
    function handleClick(event){
        setFilter(event.target.value)
    // this will send a fetch request to the database
    }

   

    
    function closeUploadModal(){
        setOpenUploadModal(false)
    }


    return(
        <div className="containterhead">
        <h2 className="logo" onClick={event =>  window.location.href='/'} >PetMe</h2>
        {/* id="logo" */}
        <select  onChange={handleClick}>
        {/*  class="filterSelect */}
            <option>All</option>
            <option>Dogs</option>
            <option>Cats</option>
            <option>Bunnies</option>
            <option>Other</option>
        </select>
        
        
    
        {/* <h2  onClick={event =>  window.location.href=`/${user.username}`} >Profile</h2> */}
        {user ? (
            <div className="navRight" >
            <h2 className="navButtonsRight" onClick={()=>{setOpenUploadModal(true)}}>Upload</h2>
            <h2   className="navButtonsRight" onClick={event =>  window.location.href=`/${user.username}`} >Profile</h2>
            </div>
        ) : (  <div className="navRight" >
        <h2 className="navButtonsRight" >Upload</h2>
        <h2   className="navButtonsRight"  >Profile</h2>
        </div> )}
       
        
        
       {/* { openUploadModal && <Modal closeUploadModal={closeUploadModal}/>} */}



            
        </div>
        

    )
}

export default Header