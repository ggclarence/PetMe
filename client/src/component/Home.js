import React, {useState} from 'react';
// import {Link} from "react-router-dom"
import HomeDefault from './HomeDefualt';
import Signup from "./Header/Signup"

function Home({user,onLogin,modalUploadStatus}){

    console.log(modalUploadStatus)
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
        
        { openModal && <Signup closeModal={closeModal} />}
        {/* { openUploadModal && <Modal />} */}
        
         
         {user ? (
             <div>
                 <HomeDefault/>
            {/* <p>user is logged in</p> */}
            </div>
           ) : (
        <div className="test">
            <form onSubmit={handleSubmit} className="container" >
                <label for="username"><b>Username/Email</b> </label>
                    <br></br>
                <input type="text" id="username"  placeholder="username" name="username"  required value={username} onChange={e => setUsername(e.target.value) }/>
                <p className="error"> {error}</p>
                    <br></br>
                <label for="password"> <b>Password</b> </label>
                    <br></br>
                <input type="password" placeholder="password" name="password"  className="inputLogin" required  id="password"value={password} onChange={ e=> setPassword(e.target.value)}/>
    
                <p className="error"> {pass}</p>
                    <br></br>
                <div >
                    <button  type="submit" > Login </button>       
                </div>
            </form>
        <button onClick={()=>{setOpenModal(true)}} >Signup</button>
        </div>     
           )}
           
    </div>
 
     )
}

export default Home