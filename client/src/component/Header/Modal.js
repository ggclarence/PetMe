import React from "react"
import "./Modal.css"
function Modal({closeModal}){
    return(
        <div className="uploadBackground">
            <div className="uploadContainer">
                <div className="titleCloseBtn">
                <button onClick={()=> {closeModal()}}> X </button>
                </div>
                <div className="sumbitTitle">
                    <h1>Sumbit your post</h1>
                </div>
                <div className="body">
                    <ul>
                    <div class="form-group">
                        <input className="formName" type="text" name="image_url" placeholder="image_url" />
                    </div>
                    <div class="form-group">
                        <input className="formName" type="text" name="description" placeholder="description" />
                    </div>
                    </ul>
                </div>
                <div className="footer">
                    <button>Share</button>
                </div>


            </div>

        </div>
    )
}


export default Modal