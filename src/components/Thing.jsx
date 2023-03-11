import React from "react";
import MyButton from "../UI/MyButton";
import Modal from "./modal/modal"
// import '../UI/thing/thing.css'

const Thing = (props) => {
  // const post_id = props.thing.id;
    return (
        <div style={{background: props.thing.color}} className='thing'>
          {/* {console.log(props.thing.id)} */}
        <div onClick={()=>props.modal(props.thing.id)} className='close'>x</div>
        {/* {console.log(props.thing.id)} */}
        <h3 className='thing-title'>{props.thing.title}</h3>
        <p className='thing-body'>{props.thing.body}</p>
        <Modal  active={props.active} setActive={props.modal} id={props.thing.id}>
        <div className='delete__form'>
            <h3>Удалить запись?</h3>
          <div className='delete__form__options'>
            {/* {console.log(({...props.thing, thing:e.target.value}))} */}
            {console.log(props.active)}
            <MyButton  color={'rgb(255 188 179)'} onClick={()=>{props.remove(props.active); props.modal(false)}}>Удалить</MyButton>
            <MyButton  color={'rgb(165 255 174)'} onClick={()=>props.modal(false)}>Отменить</MyButton>
          </div>
        </div>
      </Modal>
      </div>
    )
}

export default Thing;