import React,{useState} from "react";
import heart from "../images/icons8-heart-100.png"
import comment from "../images/icons8-comments-96.png"
import swal from 'sweetalert';
import fullheart from "../images/icons8-heart-96.png"
function MainCard({post,user}){
    // console.log(post)
    const [like,setLike] = useState(false)
    const [userLikes,setUseLikes] = useState(post.likes.length)

    
    const [newComment,setNewComment] = useState([])
  
    function onChange(event) {
        setNewComment(event.target.value)
       }

       function uploadSuccess(){
        swal("Congrats!", ", Your comment has been created!", "success")
      }

    function handleSumbit(event){
        event.preventDefault()
        fetch("/comments", {
            method: "POST",
            headers:{"Content-Type": "application/json" },
            body: JSON.stringify({
                content:newComment,
                post_id:post.id,
                user_id:user.id
            })
        }).then(data => {
            if (data.ok){ 
                uploadSuccess()
            }else{
                data.json().catch(err=> {
                    console.log(err)
                })
            }
        })
    }
    

    function handleClick(event){
      
        
        fetch("/likes", {
            method: "POST",
            headers:{"Content-Type": "application/json" },
            body: JSON.stringify({
                post_id:post.id,
                user_id:user.id
            })
        }).then(data => {
            if (data.ok){ 
                setLike(true)
                setUseLikes(userLikes+ 1)
            }else{
                data.json().catch(err=> {
                    console.log(err)
                })
            }
        })
    }

// console.log(post.likes.map((like)=>like.user))

// const test = post.likes.map((likes)=>likes.user_id)
// const test2 = test.map((like)=>like)
// console.log(test)



// console.log(post.likes.map((likes)=>likes.user_id))

console.log(post.likes.length)
   
    
    return(
        
        <div className="postHomeContainter" onSubmit={handleSumbit}>

            <div className="postHeader">
                <img onClick={event =>  window.location.href=`/${post.user.username}`} className="postProfilePic" src={post.user.profilePicUrl} alt="profilePicture" ></img>
                <h1  onClick={event =>  window.location.href=`/${post.user.username}`} className="postProfileName">{post.user.username}</h1>
            </div>
            <img className="postPicture" src={post.image_url} alt="postPicture"></img>
            <div className="postFooter">
    
                {like ? (
                    <div className="heart">
                     <img className="postBtns" src={fullheart} alt="heart"></img>   
                     <p>{userLikes}</p>
                    </div>
                ) : (
                    <div className="heart">
                    <img className="postBtns" onClick={handleClick} src={heart} alt="heart"></img>
                    <p>{userLikes}</p>
                    </div>

                )}
<div className="contentMainContainer">
    <div className="testDiv">
{post.description && 
    
               
                <div className="tv2">
                    <h1  onClick={event =>  window.location.href=`/${post.user.username}`} className="contentH1">{post.user.username}</h1> 
                    <p className="contentP"> - {post.description}</p>
                </div>}
                {post.comments.length > 0 && (
                    
                    
                        post.comments.map(comment => (
                           
                                 <div className="tv">
                                <h1  onClick={event =>  window.location.href=`/${comment.user.username}`} className="contentH1">{comment.user.username}</h1> 
                                <p className="contentP">- {comment.content}</p>
                            </div>
                        ))
               
                )}
                    
                    </div>
                    <div>
                <form className="commentSection">
                <input type="text" onChange={onChange} name="content" className="commentInput" placeholder="~ Comment "></input>
                <button className="postSumbitBtn" >Post</button>
            </form>
            </div>
            </div>
            </div>
           
        </div>
    )
}

export default MainCard