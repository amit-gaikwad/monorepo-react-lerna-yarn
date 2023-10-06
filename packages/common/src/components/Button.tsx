import React from "react";

export const Button = (props:any)=>{
    return <button style={{color:props.textColor,background:props.background}} >{props.children}</button>
}