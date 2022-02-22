import React,{useState} from "react"
import Seats from "./Seats"

export default function Gold(){
    const [gold,setGold]=useState({ "cost": 500,
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
        <h4>Gold(Rs. 500)</h4>
        <Seats data={gold} />
        </>
    )
}