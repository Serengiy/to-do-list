import React from "react";
import './modal.css'

const Modal = ({active, setActive, children, ...props}) =>{
    return(
        <div>
            {/* {console.log(props.id)} */}
            {/* {console.log(active)} */}
        <div className={active ? 'modal active': 'modal'} style={active ? {display:'flex'} : {display:'none'}}  onClick={()=>setActive(false)}>
            <div className="modal__content" onClick={(e)=>e.stopPropagation()}>
                {children}
            </div>
            {/* {setActive(true)} */}
        </div>
        </div>
    )
}

export default Modal