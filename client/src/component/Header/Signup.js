import React,{useState} from 'react';
// import "./Modal.css"
 


function Signup({closeModal}){
   

    const [newUserInfo,setNewUserInfo] = useState([])
   
   
    function onChange(event) {
        setNewUserInfo({ ...newUserInfo, [event.target.name]: event.target.value})
       }
    console.log(newUserInfo)
   
   
       function onClick(e){
           e.preventDefault()
           fetch("/signup", {
               method: "POST",
               headers:{"Content-Type": "application/json" },
               body: JSON.stringify(newUserInfo)
           }).then(()=>{
            window.location.reload();
           })
       }



    return(
        <div className="uploadBackground">
            <div className="uploadContainer">
                <div className="titleCloseBtn">
                <button onClick={()=> {closeModal()}}> X </button>
                </div>
                <div className="sumbitTitle">
                    <h1>Signup</h1>
                </div>
                <div className="body">
                    <ul>
                    <div class="form-group">
                        <input className="formName" type="text" name="username" placeholder="Username" onChange={onChange}  />
                    </div>
                    <div class="form-group">
                        <input className="formName" type="text" name="password" placeholder="password" onChange={onChange} />
                    </div>
                    <div class="form-group">
                        <input className="formName" type="text" name="email" placeholder="Email"  onChange={onChange} />
                    </div>
                    <div class="form-group">
                        <input className="formName" type="text" name="profilePicUrl" placeholder="Profile Picture URL (Optional)" onChange={onChange} />
                    </div>
                    </ul>
                </div>
                <div className="footer">
                    <button onClick={onClick}>Create</button>
                </div>


            </div>

        </div>
    )
}


export default Signup