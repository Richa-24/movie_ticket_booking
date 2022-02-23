import React,{useState} from "react"
import Seats from "./Seats"

export default function Silver(){
    const [silver,setSilver]=useState({
    "cost": 200,
    "type": "silver",
    "seats":{
        "A":[
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
   ],
       "B":[
           {"id": 1,
           "available": true},
           {"id": 2,
           "available": true},
           {"id": 3,
           "available": true},
           {"id": 4,
           "available": false},
           {"id": 5,
           "available": false}
   ]}})

    const handleAvailability=async (rcvdId)=>{
        let tempSilver=silver

        for(let i=0; i<tempSilver.seats.length; i++){
            if(rcvdId == tempSilver.seats[i].id){
                if(tempSilver.seats[i].available == true){
                    tempSilver.seats[i].available = false
                }
                else if(tempSilver.seats[i].available == false){
                    tempSilver.seats[i].available = true
                }
            }
        }

        await setSilver(tempSilver)
     }

    return(
        <>
        <h4>Silver(Rs. 200)</h4>
        <Seats data={silver} handleAvailability={handleAvailability}/>
        </>
    )
}