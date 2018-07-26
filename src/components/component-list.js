import React from 'react';

const ListElem =  (props)=><li className={props.className}><strong className="col-xs-12 list-item">{props.data.name}</strong></li>

export default ListElem;