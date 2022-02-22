import React,{useState} from "react"
import Seats from "./Seats"

export default function Premier(){
    const [premier,setPremier]=useState({ "cost": 150,
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
        <h4>Premier(Rs. 150)</h4>
        <Seats data={premier} />
        </>
    )
}