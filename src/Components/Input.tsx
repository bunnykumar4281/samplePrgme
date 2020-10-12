import React from 'react'


function Input(props:any,ref:any) {
    const {text,placeholder,name}=props;
    return (
        <div>
<input type={text} name={name} placeholder={placeholder} ref={ref}/>
        </div>
    )
}
const FInput =React.forwardRef(Input)
export default FInput
