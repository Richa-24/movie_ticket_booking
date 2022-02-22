import React,{useState} from "react"
import Seats from "./Seats"

export default function Silver(){
    const [silver,setSilver]=useState({"cost": 200,
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
        <h4>Silver(Rs. 200)</h4>
        <Seats data={silver}/>
        </>
    )
}