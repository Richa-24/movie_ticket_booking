import React,{useState} from "react"
import Seats from "./Seats"

export default function Executive(){
    const [executive,setExecutive]=useState({
         "cost": 300,
         "seats":[
            {"id": 1,
            "available": true},
            {"id": 2,
            "available": true},
            {"id": 3,
            "available": true},
            {"id": 4,
            "available": true},
            {"id": 5,
            "available": true}
    ]})

    return(
        <>
        <h4>Executive(Rs. 300)</h4>
        <Seats data={executive}/>
        </>
    )
}