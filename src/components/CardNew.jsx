
import React from 'react'
import './card.css';
import App from '../App';
import { useState } from 'react';


const CardNew = (props) => {
  const [counter, setCounter] = useState(0);

  const handleClick = (type) =>{
    console.log(type);
    setCounter(counter+1);
  
  }

  const handleClickminus = (type) =>{
    console.log(type);
    setCounter(counter-1);
   
  }

 
   
  const content = {
    textAlign: 'center',
    padding:'150px'
    
  }
  const cartbox = {

    float:'right',
  }
 

  return(
    
    <div style={content}>
     <p style={cartbox}> Cart-Item  - {counter}</p> 
      <div class="row row-cols-1 row-cols-md-4 g-4">
  <div class="col">
    <div class="card">
    <img className='product-image' style={{width:'300px'}} src={props.image}></img>
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">{props.price}</p>
        <p class="card-text">{props.description}</p>
        <button type="button" class="btn btn-outline-dark" style={{borderRadius: '5px',width:'150px'}} onClick={ () =>{handleClick('Incr')}}>Add to Cart</button>
        <br></br>
      <button onClick={ () =>{handleClickminus('Minus')}} > X
      </button>
      </div>
   </div>
</div>
  <div class="col">
  <div class="card">
  <img className='product-image' style={{width:'300px'}} src={props.image}></img>
     <div class="card-body">
       <h5 class="card-title">{props.title}</h5>
       <p class="card-text">{props.price}</p>
       <p class="card-text">{props.description}</p>
       <button type="button" class="btn btn-outline-dark" style={{borderRadius: '5px',width:'150px'}} onClick={ () =>{handleClick('Incr')}}>Add to Cart</button>
      <br></br>
      <button onClick={ () =>{handleClickminus('Minus')}} > X
      </button>
     </div>
  </div>
  </div>
  <div class="col">
  <div class="card">
  <img className='product-image' style={{width:'300px'}} src={props.image}></img>
     <div class="card-body">
    
       <h5 class="card-title">{props.title}</h5>
       <p class="card-text">{props.price}</p>
       <p class="card-text">{props.description}</p>

      <button type="button" class="btn btn-outline-dark" style={{borderRadius: '5px',width:'150px'}} onClick={ () =>{handleClick('Incr')}}>Add to Cart</button>
      <br></br>
      <button onClick={ () =>{handleClickminus('Minus')}} > X
      </button>
     </div>
  </div>
  </div>
  <div class="col">
  <div class="card">
  <img className='product-image' style={{width:'300px'}} src={props.image}></img>
     <div class="card-body">
       <h5 class="card-title">{props.title}</h5>
       <p class="card-text">{props.price}</p>
       <p class="card-text">{props.description}</p>
       <button type="button" class="btn btn-outline-dark" style={{borderRadius: '5px',width:'150px'}} onClick={ () =>{handleClick('Incr')}}>Add to Cart</button>
<br></br>
<button onClick={ () =>{handleClickminus('Minus')}} > X
</button>
     </div>
  </div>
  </div>
  <div class="col">
  <div class="card">
  <img className='product-image' style={{width:'300px'}} src={props.image}></img>
     <div class="card-body">
       <h5 class="card-title">{props.title}</h5>
       <p class="card-text">{props.price}</p>
       <p class="card-text">{props.description}</p>
       <button type="button" class="btn btn-outline-dark" style={{borderRadius: '5px',width:'150px'}} onClick={ () =>{handleClick('Incr')}}>Add to Cart</button>
<br></br>
<button onClick={ () =>{handleClickminus('Minus')}} > X
</button>
     </div>
  </div>
  </div>
  <div class="col">
  <div class="card">
  <img className='product-image' style={{width:'300px'}} src={props.image}></img>
     <div class="card-body">
       <h5 class="card-title">{props.title}</h5>
       <p class="card-text">{props.price}</p>
       <p class="card-text">{props.description}</p>

       <button type="button" class="btn btn-outline-dark" style={{borderRadius: '5px',width:'150px'}} onClick={ () =>{handleClick('Incr')}}>Add to Cart</button>
<br></br>
<button onClick={ () =>{handleClickminus('Minus')}} > X
</button>
     </div>
  </div>
  </div>
</div>
    </div>
    
  )
}

export default CardNew;