import React from "react"
import Executive from "./Executive"
import Gold from "./Gold"
import Premier from "./Premier"
import Silver from "./Silver"
import { useRouter } from "next/router"

export default function Mainpage(){
    const router = useRouter()
    
    const handleProceed=()=>{

        router.push("/summary")
    }
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
                <button onClick={()=>handleProceed()}>Proceed</button>
            </div>
        </>
    )
}