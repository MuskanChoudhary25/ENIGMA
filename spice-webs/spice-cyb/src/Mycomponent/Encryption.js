import React from 'react';
import './Encryption.css';

const Encryption = () => {
  return (
    <div>
       <div className="title">
      <p id="sames">Encryption by</p>
      <p id="same"> EnigmaSnap</p>
      
   
     </div>
   
   
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
 <div className="container-fluid">
   <a className="navbar-brand" href="/">Home</a>
   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <span className="navbar-toggler-icon"></span>
   </button>
   <div className="collapse navbar-collapse" id="navbarSupportedContent">
     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
     <li className="nav-item">
         <a className="nav-link" aria-current="page" href="sharpen">Sharpen</a>
       </li>
       <li className="nav-item">
         <a className="nav-link" aria-current="page" href="/blur">Blur Image</a>
       </li>
       <li className="nav-item">
         <a className="nav-link" href="/gray">Gray Scale Image</a>
       </li>
       <li className="nav-item">
         <a className="nav-link" aria-current="page" href="/imvert">Invert image(colors)</a>
       </li>
       <li className="nav-item">
         <a className="nav-link" aria-current="page" href="/Lighten">Lighten Photo</a>
       </li>
       
       
       
     </ul>
     
    
   </div>
 </div>
</nav>
<br></br>
<br></br>

<div id="text">Add image</div>
<br></br>
<br></br>
<br></br>
<br></br>

<div id="imen">
   
    <div id="img" ><a id="enc" href="/Img" >Add image to Encrypt</a></div>
    <div id="res">Encrypted Image</div>
    </div>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>

<div id="text">Enter key</div>

<div id="key">
    <div id="emp"></div>
    <div id="go">Encrypt</div>
    <div id="down">Download</div>
    </div>


    <div id="cybers">
      <img src="https://vitbhopal.ac.in/file/2022/04/Cyber-Security1.jpg" height="368" />
    </div>
    </div>
  )
}

export default Encryption;
