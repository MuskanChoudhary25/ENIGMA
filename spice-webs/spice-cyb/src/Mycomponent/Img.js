import React from "react";
import { useState } from "react";

function Img() { 
    const [image , setImage] = useState('')
    function handleImage(e) {
        console.log(e.target.files)
        setImage(e.target.files[0])
    }
    return(<div>
        <input type="file" name="file" onChange={handleImage}/>
        <button> submit</button>
    </div>)}
    export default Img;