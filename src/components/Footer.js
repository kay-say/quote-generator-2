import React from "react"
import Social from "./Social"
import NewQuote from "./NewQuote"

export default function Footer(props){
    return(
        <footer>
            <Social />
            <NewQuote getQuote={props.getQuote} />
        </footer>
    )
}