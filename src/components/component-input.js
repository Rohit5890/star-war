import React from 'react';

const InputElem =  (props)=><input className={props.className} placeholder={props.placeholder} onChange={(e)=>{props.onChangeHandler(e)}}/>

export default InputElem;