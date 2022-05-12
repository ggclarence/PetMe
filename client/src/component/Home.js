import React, {useState} from 'react';
// import {Link} from "react-router-dom"
import HomeDefault from './HomeDefualt';
import Signup from "./Header/Signup"
import "./Header/Modal.css"
function Home({user,onLogin,modalUploadStatus}){

    const [openModal, setOpenModal] = useState(false)
    // const [openUploadModal, setOpenUploadModal] = useState(false)
    
    function closeModal(){
        setOpenModal(false)
    }

   

    
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const [error, setError] = useState("")
    const [pass, setPass] =useState("")

    function handleSubmit(x){
        x.preventDefault()
        setLoading(true)
    
    fetch('/login',{
        method: 'POST',
        headers: {"Content-Type" : "application/json"},
        body :JSON.stringify({username,password}) 
    })
    .then(data => {

        setLoading(false);

        if (data.ok){

            data.json().then(el=> onLogin(el) )
        }else{
            data.json().catch(err=> {
                setError( "wrong email")
                setPass("wrong password")
            })
        }
    })

 
    
 }
    
    return (
    <div>
        
        { openModal && <Signup  closeModal={closeModal} />}
        {/* { openUploadModal && <Modal />} */}
        
         
         {user ? (
             <div>
                 <HomeDefault user={user}/>
            {/* <p>user is logged in</p> */}
            </div>
           ) : (
            <div className="uploadBackground">   
        <div className="uploadContainer2">
            <form  className="container" >
                <label for="username"><b>Username</b> </label>
    
                <input type="text" className="formName"  placeholder="username" name="username"  required value={username} onChange={e => setUsername(e.target.value) }/>
                <p className="error"> {error}</p>
                 
                <label className="form-group" for="password"> <b>Password</b> </label>
                 
                <input type="password" placeholder="password" name="password"  className="formName" required  id="password"value={password} onChange={ e=> setPassword(e.target.value)}/>
    
                <p className="error"> {pass}</p>
            </form>
            <div >
            <button className='btnLogin' onClick={handleSubmit} type="submit" > Login </button>     
            <button className='btnLogin' onClick={()=>{setOpenModal(true)}} >Signup</button>
            </div>
        </div>     
        </div>
           )}
           
    </div>
 
     )
}

export default Home