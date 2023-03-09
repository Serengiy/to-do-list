import React from "react";
import Modal from "./modal/modal"
// import '../UI/thing/thing.css'

const Thing = (props) => {
    return (
        <div style={{background: props.thing.color}} className='thing'>
          {/* {console.log(props.thing.id)} */}
        <div onClick={()=>props.modal(true)} className='close'>x</div>
        <h3 className='thing-title'>{props.thing.title}</h3>
        <p className='thing-body'>{props.thing.body}</p>
        <Modal active={props.active} setActive={props.modal}>
        <div className='delete__form'>
            <h3>Удалить запись?</h3>
          <div className='delete__form__options'>
        
            <button className='delete__form__options__btn' onClick={()=>console.log(props.thing)} >Удалить</button>
            <button className='delete__form__options__btn' onClick={()=>props.modal(false)}>Отменить</button>
          </div>
        </div>
      </Modal>
      </div>
    )
}

export default Thing;