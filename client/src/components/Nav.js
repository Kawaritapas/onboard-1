import axios from "axios";
import React, { useState ,useEffect} from "react";
import { Menu } from "semantic-ui-react";
import {useHistory} from "react-router-dom"
export default function Nav() {
    const [user,setUser] = useState()
    let history = useHistory()
    useEffect(() => {
        axios.get("/user")
        .then(res=>{
            setUser(res.data)
        }).catch(err=>{
            console.log(err);
        })
    }, [])
    function handleClick(e){
        e.preventDefault();
        axios.get("/logout")
        history.push("/")
    }
  return (
    <div>
      <Menu  inverted style={{height:"50px",fontSize:"20px"}}>
        <Menu.Item
          name={user?`signed in as${user.displayName}`:""}
        />
      {
          !user?<p onClick={()=> history.push("/")} style={{color:"white"}}>signin</p>:<p></p>
      }
      <Menu.Item
        >
        <button onClick={handleClick} className="ui red button">Logout</button>
        </Menu.Item>
      </Menu>
      
    </div>
  );
}
