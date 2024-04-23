import { useState } from 'react'

const App = () => {

 const [counter, setCounter] = useState(0);
  const handleClick = (type) =>{
    console.log(type);
    setCounter(counter+1);
  
  }

  const handleClickminus = (type) =>{
    console.log(type);
    setCounter(counter-1);
   
  }

  const handleClickZero = (type) =>{
    console.log(type);
    setCounter(0);
  
  }
  return (
    <div>
      <p>Counter: { counter} </p>
      <button onClick={ () =>{handleClick('Incr')}} > Plus
      </button>

      <button onClick={ () =>{handleClickminus('Minus')}} > Minus
      </button>

      <button onClick={ () =>{handleClickZero('Zero')}} > Zero
      </button>
    </div>
  )
}

export default App;
