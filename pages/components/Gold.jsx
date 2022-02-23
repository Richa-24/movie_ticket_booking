import React,{useState} from "react"
import Seats from "./Seats"

export default function Gold(){
    const [gold,setGold]=useState({ 
    "cost": 500,
    "type": "gold",
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
           "available": false}
   ],
       "B":[
           {"id": 1,
           "available": true},
           {"id": 2,
           "available": true},
           {"id": 3,
           "available": false},
           {"id": 4,
           "available": true},
           {"id": 5,
           "available": true}
   ]}})

    const handleAvailability=async (rcvdId)=>{
        let tempGold=gold

        for(let i=0; i<tempGold.seats.length; i++){
            if(rcvdId == tempGold.seats[i].id){
                if(tempGold.seats[i].available == true){
                    tempGold.seats[i].available = false
                }
                else if(tempGold.seats[i].available == false){
                    tempGold.seats[i].available = true
                }
            }
        }

        await setGold(tempGold)
     }
     
    return(
        <>
        <h4>Gold(Rs. 500)</h4>
        <Seats data={gold} handleAvailability={handleAvailability} />
        </>
    )
}