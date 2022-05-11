import React, {useState,useEffect} from 'react';
import MainCard from './MainCard';
import "./Home.css"




function HomeDefault({user}){
    
    const [post,setPost] = useState([])

    useEffect(() => {
        fetch("/posts").then((response) => {
          if (response.ok) {
            response.json().then((user) => setPost(user));
          }
        });
      }, []);
    
    
    
    const postMap = post.map((post)=>{
        return <MainCard post={post} user={user}/>
    })
    
    console.log(postMap)
    
    return(
        <div id="containerCTN">
            {postMap}
        </div>
    )
}

export default HomeDefault