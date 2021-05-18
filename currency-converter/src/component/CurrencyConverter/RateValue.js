import React, {useState} from 'react';

function RateValue(){
    const [count, setCount] = useState(1)

    return <span className="output">{count}</span>
}


export default RateValue