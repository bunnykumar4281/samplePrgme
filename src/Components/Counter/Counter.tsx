import React, { useState } from 'react'
import WithIncrement from '../HOC/WithIncrement'


const Counter = (props:any) => {
   const {count,increment,email}=props;
   
    return (
        <div>
            <button onClick={increment}>clicked {count} times</button>
            <br/>
            my mail address{email}
        </div>
    )
}

export default WithIncrement(Counter,5)
