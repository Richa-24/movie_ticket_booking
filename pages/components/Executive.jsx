import React,{useState} from "react"
import Seats from "./Seats"

export default function Executive(){
    const [executive,setExecutive]=useState({
         "cost": 300,
         "type": "executive",
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
    ]}
})

    const handleAvailability=async (rcvdId)=>{
        let tempExecutive=executive

        for(let i=0; i<tempExecutive.seats.length; i++){
            if(rcvdId == tempExecutive.seats[i].id){
                if(tempExecutive.seats[i].available == true){
                    tempExecutive.seats[i].available = false
                }
                else if(tempExecutive.seats[i].available == false){
                    tempExecutive.seats[i].available = true
                }
            }
        }

        await setExecutive(tempExecutive)
     }

    return(
        <>
        <h4>Executive(Rs. 300)</h4>
        <Seats data={executive} handleAvailability={handleAvailability}/>
        </>
    )
}