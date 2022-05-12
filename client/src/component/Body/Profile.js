import React,{useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import './Profile.css';
import ProfilePost from "./ProfilePost";


function Profile({user}){
    const {username} = useParams();
    const [profile,setProfile] = useState("")
    useEffect(() => {
    fetch(`/user/${username}`)
    .then(response=>response.json())
    .then(data=>setProfile(data))
}, []);

// console.log(profile)
function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => {
      window.location.href=`/`;
    })
  }


    return(
       <div>
       {user ? (
       (user.username === profile.username) ? (
        <div className="profile">
          <div className="profileHeader">
        <img className="profilePic" src={profile.profilePicUrl} alt="profile pic"></img>
        <div className="profileHeaderTop">
          <h1 className="profileName">{profile.username}</h1>
          <button class="lgtbtn" onClick={handleLogout}>Logout</button>
         </div>
        <p>{profile.bio}</p>
        </div>

        <div className="images">
        <p>Images</p>
        <ProfilePost userPost={profile.posts}/>

        </div>
        </div>  
      ) : (
        <div>
            <p><div className="profile">
        <h1 className="profileName">{profile.username}</h1>
        <img className="profilePic" src={profile.profilePicUrl} alt="profile pic"></img>
        <p>{profile.bio}</p>
        <div className="images">
        <p>Images</p>
        <ProfilePost userPost={profile.posts}/>
        </div>
        </div>  </p>
        </div>
      )
       ) : (<p>Please Sign in</p>)}






     
     

          
      
       
       
          

        </div>
    )
}

export default Profile

// function test(){
//     console.log(username)
//     debugger
// }