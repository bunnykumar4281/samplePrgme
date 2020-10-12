import React, { useState } from 'react'



const WithIncrement = (OriginalComponent:any,setvalue:any) => {
    
    const WithInc=(props:any)=>{
        //logic
        const [state,Nexstate]=useState(0);
        const HandleEvent=()=>{
            Nexstate(state+setvalue)
        }
        
    
return <OriginalComponent count={state} increment={HandleEvent} {...props}/>
    }

    return WithInc
}

export default WithIncrement
