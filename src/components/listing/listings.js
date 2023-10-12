import React from "react"

const parse = require("html-react-parser")

let text = "<b>monk<i>e</i>y</b>"

const Listing = (props) => {
    return (
        <>
            <h1> TEST LISTING NAME </h1>
            <p> Image ?</p>
            <p> date range</p>
            <p> {parse(text)} </p>
        </>
    )
}

export default Listing