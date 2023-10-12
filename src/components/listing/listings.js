import React from "react"

const parse = require("html-react-parser")

let text = "<b>monk<i>e</i>y</b>"

const Listing = (props) => {
    return (
        <>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                    <h3 className="mb-0">{props.title}</h3>
                    <div className="subheading mb-3">{props.subTitle}</div>
                    <div>{parse(props.description)}</div>
                </div>
                <div className="flex-shrink-0"><span className="text-primary">{props.dateRange}</span></div>
            </div>
        </>
    )
}

export default Listing