import React, { useState } from "react"
import data from "./data"
import './style.css'

//single selection
//multiple selection

const Accordian = () => {

    const [selected, setSelected] = useState(null);


    const handleSingleSelection = (getCurrId) => {
        console.log(getCurrId);
        setSelected(getCurrId === selected ? null : getCurrId)
    }

    console.log(selected);
    return (
        <div className="wrapper">
            <div className="accordian">
                {
                    data && data.length > 0 ? (
                        data.map((dataItem) => (
                            <div className="item">
                                <div onClick={() => handleSingleSelection(dataItem.id)} className="title">
                                    <h3>{dataItem.question}</h3>
                                    <span>+</span>
                                </div>
                                {
                                    selected === dataItem.id ?
                                    <div className="content">{dataItem.answer}</div>
                                    : null
                                }
                            </div>
                        )
                        )
                    ) : <div>No data found</div>
                }
            </div>
        </div>
    )
}

export default Accordian;