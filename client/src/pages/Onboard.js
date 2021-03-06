import {useEffect,useState} from "react"
import axios from "axios"
import Options from "../components/Options"
import Nav from "../components/Nav"

export default function Onboard() {
   const [page,setPage] = useState(1)
   const [data,setData] = useState("")
    useEffect(() => {
        axios.get(`/onboard/${page}`)
        .then(res=>{
            setData(res)
        })
        .catch(err=>{
            console.log(err)
        })
    }, [])

    function handleClick(){
        setPage(page+1)    
            axios.get(`/onboard/${page+1}`)
            .then(res=>{
                setData(res)
            })
            .catch(err=>{
                console.log(err)
            })
       
    }
    return (
        <div>
            <Nav/>
            {
                data.data==""?<h1 style={{color:"white",textAlign:"center"}}>You seem to have a sleep efficiency of 89%, Thats good</h1>:<p>hiuh</p>
            }
            
            {
                data?(data.data.map(function(data){
                  return  (
                      <div className="ui container">
                     <Options questions = {data} key={data.id}/>
                     </div>
                  )
                })):(<p>loading...</p>)
            }
        <i onClick={handleClick} class="arrow alternate huge circle down icon" style={{color:"yellow",margin:"auto",display:"block",marginTop:"50px"}}></i>
        </div>
    )
}
