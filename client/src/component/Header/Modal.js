import React, {useEffect,useState} from 'react';
import "./Modal.css"
function Modal({closeUploadModal,uploadSuccess}){

    const [newPost,setNewPost] = useState([])
    const [error, setError] = useState("")
    useEffect(() => {
        fetch("/me").then((response) => {
          if (response.ok) {
            response.json().then((user) => setNewPost({ ...newPost, user_id:user.id  }));
          }
        });
      }, []);
    
    function handleSumbit(e){
        e.preventDefault()
        fetch("/posts", {
            method: "POST",
            headers:{"Content-Type": "application/json" },
            body: JSON.stringify(newPost)
        }).then(data => {
            if (data.ok){ 
                closeUploadModal()
                uploadSuccess()
            }else{
                data.json().catch(err=> {
                    setError( "Error, try again")
                })
            }
        })
    }
    
    console.log(newPost)
    
    function onChange(event) {
        setNewPost({ ...newPost, [event.target.name]: event.target.value})
       }
       console.log(newPost)
    
    
    return(
        <div className="uploadBackground">
            <div className="uploadContainer">
                <div className='uploadHeader'>
                <h1 className='sumbitTitle' >Sumbit your post</h1>
                <button className="titleCloseBtn" onClick={()=> {closeUploadModal()}}> X </button>
                
                </div>
                {/* <div className="sumbitTitle">
                    <h1>Sumbit your post</h1>
                </div> */}
                <div className="body">
                <ul>
                    {newPost.image_url && 
                    <div className="form-group">
                    <img  className='image-preview' src={newPost.image_url} alt='preview'></img> 
                    </div>
                    }
                    
                    
                    <div class="form-group">
                        <input className="formName" type="text" name="image_url" onChange={onChange} placeholder="image_url" />
                    </div>
                    <div class="form-group">
                        <input className="formName" type="text" name="description" onChange={onChange} placeholder="Description (Optional)" />
                    </div>                              
                    </ul>
                    <p className="error"> {error}</p>
                </div>
                <div className="footer">
                    <button onClick={handleSumbit}>Share</button>
                </div>


            </div>

        </div>
    )
}


export default Modal