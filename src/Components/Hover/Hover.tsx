import React, { useState } from 'react'
import WithIncrement from '../HOC/WithIncrement';



const Hover = (props:any) => {
  
   const {count,increment}=props;
    return (
        <div>
            <p onMouseOver={increment}>hover {count} times</p>
        </div>
    )
}

export default WithIncrement(Hover,10)
