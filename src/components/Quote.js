import React from "react"

export default function Quote(props){
    return(
        <main className="quote-wrapper flex">
            <p className="quote">{props.joke}</p>
        </main>
    )
}