import React from "react";



function ProfileCard({post}){
 console.log(post)
    
    return(
        <img className="profilePost" src={post.image_url}   ></img>
    )
}

export default ProfileCard