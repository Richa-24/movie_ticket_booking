import React from "react"
import Executive from "./Executive"
import Gold from "./Gold"
import Premier from "./Premier"
import Silver from "./Silver"

export default function Mainpage(){

    return(
        <>
            <div>
            <h1>Movie Ticket Booking</h1>
            </div>

            <div style={{display: "flex", justifyContent: "center"}}>
                <div>
                <Gold />
                <Executive />
                <Silver />
                <Premier />
                </div>
            </div>

            <div className="mainProceedButton">
                <button>Proceed</button>
            </div>
        </>
    )
}