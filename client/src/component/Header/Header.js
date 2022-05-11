import React,{useState,useEffect} from "react";
import "./Header.css"
import SearchOptions from "./SearchOptions.js"
function Header({logo,user,setOpenUploadModal}){
    const [filter,setFilter] = useState("")
    const [listOfUsers,setListOfUsers] = useState([])
    console.log(listOfUsers)
    
    function handleClick(event){
        window.location.href=`/${event.target.value}`
    // this will send a fetch request to the database
    }

    useEffect(() => {
        fetch("/users").then((response) => {
          if (response.ok) {
            response.json().then((user) => setListOfUsers(user));
          }
        });
      }, []);

    
    function closeUploadModal(){
        setOpenUploadModal(false)
    }

    const mapUsers = listOfUsers.map((user)=>{
        return <SearchOptions user={user}/>
    })
    return(
        <div className="containterhead">
        <h2 className="logo" onClick={event =>  window.location.href='/'} >PetMe</h2>
     
        <select  onChange={handleClick}>
            <option>Search For Users</option>
            {mapUsers}

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