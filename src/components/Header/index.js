import React from 'react';
import "./style.css";

export default function Header(props){

    return(
        <div className="header">
    <div className="title">Clicky!</div>
    <div className="scores">
      Score: {props.score} 
    </div>
  </div>

    )

}