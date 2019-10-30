import React from 'react';
import "./style.css"

export default function ColorCard(props) {

    return(
        
        <div  onClick={props.clickHandle}>
        <img alt={props.name} src={props.image} id={props.id}/>
    </div>
    )
}