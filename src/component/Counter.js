import React from 'react'

export default function Counter(props) {
    const[counter, setCounter] = useState(1);
    const Increment = () => {
        setCounter(counter + 1);
    }
  return (
    <div>
        <h1>Counter: {counter}</h1>
    </div>
  )
}
  