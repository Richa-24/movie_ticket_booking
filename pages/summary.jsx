import React, { useEffect, useState } from "react"

export default function Summary(){
    const [seatSummary,setSeatSummary]=useState("")
    const [amount,setAmount]=useState()

    useEffect(()=>{
        let url=localStorage.getItem("url")
        let newArr=url.split("/").filter((item)=>item !== "" && item)
        setSeatSummary(newArr)
    },[])

    console.log(seatSummary)
    return(
        <div>
            <h1>Summary</h1>
            {seatSummary.map((item)=>(
                <div>
                    <div>{item}</div>
                </div>
            ))}
            <h3>{`Total Amount: `}</h3>
        </div>
    )
}