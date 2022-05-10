import React from "react";
import PostCard from "./PostCard"


function ProfilePost({userPost}){

    
    return(
        <div className="post-container">
        
            {userPost ? (
                  userPost.map((post) => <PostCard post={post}/>)
            ) : (
                <p>Loading</p>
            )}
          
        </div>
    )
}

export default ProfilePost