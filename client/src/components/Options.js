import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { Message } from 'semantic-ui-react';
import { TimeInput} from 'semantic-ui-calendar-react';
export default function Options(props) {
    const [selected,setSelected] = useState(null)
    const [time,setTime]= useState("")
    function handleClick(e){
        e.preventDefault();
      setSelected(e.target.innerHTML)
      console.log(e.target.innerHTML)
     
        axios.post("/submit",e.target.innerHTML)
        .then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
    }
    
    return (
        <div>
            <h2 style={{color:'white',textAlign:"center",marginTop:"100px"}}>{props.questions.problem}</h2>
            <br></br>
            <br></br>
        
            {
                props.questions.options[1]!=="select time"?(
                    <Message onClick={handleClick} value={props.questions.options[1]} style={{width:"600px",margin:"auto",display:"block",borderRadius:"30px"}}  color='purple'>{ props.questions.options[1]}</Message>
                ):(<form style={{marginLeft:"40%"}}> <TimeInput
                    name="time"
                    placeholder="Time"
                    value={time}
                    iconPosition="down"
                    onChange={handleClick}
                  /></form>)
            }
            <br></br>
            <br></br>
            {
                props.questions.options[2]?(
                    <Message onClick={handleClick} value={props.questions.options[2]} style={{width:"600px",borderRadius:"30px",margin:"auto",display:"block",borderRadius:"30px"}}  color='orange'>{ props.questions.options[2]}</Message>
                ):(<p></p>)
            }
            <br></br>
            <br></br>
            {
                props.questions.options[3]?(
                    <Message onClick={handleClick} value={props.questions.options[3]} style={{width:"600px",margin:"auto",display:"block",borderRadius:"30px"}}  color='blue'>{ props.questions.options[3]}</Message>
                ):(<p></p>)
            }
            <br></br>
            <br></br>
            {
                selected?(<Message color='green' style={{width:"400px",textAlign:"center",margin:"auto",display:"block"}}>selected: {selected} </Message>):<p></p>
            }
            
          
        </div>
    )
}
