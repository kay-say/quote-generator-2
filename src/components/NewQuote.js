import React from "react"

export default function NewQuote(props){
    return(
        <div>
            <button onClick={props.getQuote} >New Quote</button>
        </div>
    )
}