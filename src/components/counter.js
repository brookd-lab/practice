import { useState } from 'react'

const Counter= () => {
    const [number, setNumber] = useState(1);
    
    const increment = (value = 1) => {
        setNumber(prev => prev + value);
    }

    const decrement = (value = 1) => {
        setNumber(prev => prev - value);
    }
    
    return (
        <div className="text-center">
            <div className="container text-center">
                <div>{number}</div>
                <button className="btn-sm btn-info me-2" onClick={() => increment(4)}>
                    Increment
                </button>
                <button className="btn-sm btn-success " onClick={() => decrement()}>
                    Decrement
                </button>
            </div>
        </div>
    )
}

export default Counter;