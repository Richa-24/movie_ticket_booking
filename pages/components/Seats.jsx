import React, { useEffect, useState } from "react"

export default function Seats(props){
    const [seatInfo,setSeatInfo]=useState(
        {gold: [], executive: [], silver: [], premier: []}
    )
    const [mainSeatUrl,setMainSeatUrl]=useState("")
    const [cost,setCost]=useState("")

    const handleCheckboxChange=async (rcvId,section,type,checked)=>{

        let tempSelectedUrl=""

        tempSelectedUrl=type+":"+section+rcvId

    if(checked == true){
        await setMainSeatUrl(mainSeatUrl.concat("/",tempSelectedUrl))
    }
    else if(checked == false){
        let tempUrl= mainSeatUrl.split("/").filter(item=>(
            item.split(":")[0] == type ? item.split(":")[1] !== section+rcvId && item : item))
            await setMainSeatUrl(tempUrl.join("/"))
    }
    
}
localStorage.setItem("url",mainSeatUrl)
localStorage.setItem("cost",mainSeatUrl)


    return(
        <>
        <div style={{}}>
            <div className="seatsRow">
                <span>A</span>
        {props.data.seats.A.map((item)=>(
            <>
            {item.available ? (
                <div key={item.id}>
                <input type="checkbox" className="seatUi" onChange={(e)=>handleCheckboxChange(item.id,"A",props.data.type,e.target.checked)}/>
            </div>
            ) : (
                <div key={item.id}>
                <input type="checkbox" disabled className="seatUiSelected" />
            </div>
            )}
           </>
        ))}
        </div>
        <div className="seatsRow">
            <span>B</span>
        {props.data.seats.B.map((item)=>(
            <>
            {item.available ? (
                <div key={item.id}>
                <input type="checkbox" className="seatUi" onChange={(e)=>handleCheckboxChange(item.id,"B",props.data.type,e.target.checked)}/>
            </div>
            ) : (
                <div key={item.id}>
                <input type="checkbox" disabled className="seatUiSelected" />
            </div>
            )}
           </>
        ))}
        </div>
        </div>
        </>
    )
}