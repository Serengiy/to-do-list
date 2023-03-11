import React from "react";
import classes from './MyButton.module.css'


const MyButton = ({children, color, ...props}) =>{
    return(
    <button {...props} style={{'background':color}} className={classes.myBtn} >{children}</button>
    )
}

export default MyButton;