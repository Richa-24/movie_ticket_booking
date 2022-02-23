import React,{useState} from "react"
import Seats from "./Seats"

export default function Premier(){
    const [premier,setPremier]=useState({
    "cost": 150,
    "type": "premier",
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
           "available": true},
           {"id": 5,
           "available": true}
   ]}})

    const handleAvailability=async (rcvdId)=>{
        let tempPremier=premier

        for(let i=0; i<tempPremier.seats.length; i++){
            if(rcvdId == tempPremier.seats[i].id){
                if(tempPremier.seats[i].available == true){
                    tempPremier.seats[i].available = false
                }
                else if(tempPremier.seats[i].available == false){
                    tempPremier.seats[i].available = true
                }
            }
        }

        await setPremier(tempPremier)
     }

    return(
        <>
        <h4>Premier(Rs. 150)</h4>
        <Seats data={premier} handleAvailability={handleAvailability}/>
        </>
    )
}