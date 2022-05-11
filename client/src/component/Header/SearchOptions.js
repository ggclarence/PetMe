import React from "react";

function SearchOptions({user}){
    return(
        <option value={user.username}>{user.username}</option>
    )
}

export default SearchOptions