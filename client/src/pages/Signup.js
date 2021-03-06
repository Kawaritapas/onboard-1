import React from 'react';
import axios from "axios"
export default function Signup() {
    function handleClick(){
      window.location.href="http://localhost:3002/google"
    }
    return (
        <>
          <div className = "ui container" >
              <img style= {{margin:"auto",display:"block",width:"100px",marginTop:"40px"}} src="sleep.png"></img>
              <br></br>
              <br></br>
            
              <div className="ui segment" style={{ marginTop:"100px",backgroundColor:"rgb(8, 4, 32)",borderColor:"purple",width:"600px",margin:"auto",display:"block"}}>
              <h1 style={{textAlign:"center",color:"white"}}>Sign In Using Google</h1>
              <br></br>
             <button onClick={handleClick} style={{fontSize:"20px",margin:"auto",display:"block"}} className="ui primary button"><i class="google  icon" style={{margin:"auto"}}></i>  Signup</button> 
              </div>
              </div>  
        </>
    )
}
