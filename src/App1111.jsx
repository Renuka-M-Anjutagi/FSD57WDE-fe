import { useState } from 'react'

const App = () => {

 const [counter, setCounter] = useState(0);
 const [mcounter, setmCounter] = useState(0);

 const [zero, setzCounter] = useState(0);
 
 

  
  return (
    <div>
      <p>Plus : { counter} </p>
      <p>Minus: { mcounter} </p>
      <p>Zero : { zero} </p>
      <button  onClick={ () =>{setCounter(counter + 1)}} > Plus
      </button>

      <button  onClick={ () =>{setmCounter(mcounter + 1)}} > Minus
      </button>

      <button  onClick={ () =>{setzCounter(zero + 1)}} > Zero
      </button>
    </div>
  )
}

export default App;
