import React from "react";
import Thing from './Thing';

const ThingsList= (props) =>{
    return (
        <div className='list-things'>
            <div className="list-things-cont">
            {props.list.map((thing) => 
                <Thing  active={props.active} modal={props.modal} thing={thing} key={thing.id} remove={props.remove}></Thing>
                // <Thing props = {[...props]}></Thing>
            )}
                <div className="thing-add">
                    <img src={require("./add.png")} alt="not found" className="add-thing-img"/>
                </div>
            </div>
        </div>
    )
}

export default ThingsList