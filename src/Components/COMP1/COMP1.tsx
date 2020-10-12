import React from 'react'

interface Props {
    name:string
    age:number
    email: string
}

function COMP1 (Props:Props) {
    const {name,age,email}=Props
    return (
        <div>
            Name is {name} and age is {age} and emai is {email}
        </div>
    )
}

export default COMP1
