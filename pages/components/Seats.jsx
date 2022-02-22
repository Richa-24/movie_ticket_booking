import React from "react"

export default function Seats(props){

    return(
        <>
        <div style={{display: "flex", flexDirection: "row"}}>
        {props.data.seats.map((item)=>(
            <div key={item.id} >
                <div className="seatUi"></div>
            </div>
        ))}
        </div>
        </>
    )
}