import React from 'react';
import CardNew from "./components/CardNew";
import { useState } from 'react';

const App = () => {
 
  const [counter, setCounter] = useState(0);

   
  const divStyle = {
  
    backgroundColor:'#F8F9FA',
    textAlign: 'center',
    
  }
  const divBanner = {
    backgroundColor:'#212529',
    height:'300px',
    width:'100%',
    color:'white',
    padding:'100px',
    
  }
  const innerdivStyle = {
  
    backgroundColor:'white',
    height:'auto',
    width:'auto',
    textAlign: 'center',
    margin: '20px',
    padding:'40px',
   
    
  }
  const styles = {
   
    display:'flex',
   
    gap:'20px',
    
  
   }
 const cartbox1 = {
  float:'right'
 }
   const data = [
    {
      id:1,
      price:'$40.00 - $80.00',
      title:'Fancy Product',
      image:'../src/assets/6c757d.jpg',
      description:'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
    },
    {
      id:2,
      price:'$20.00 $18.00',
      title:'Special Item',
       image:'src/assets/6c757d.jpg',
      description:'This card has supporting text below as a natural lead-in to additional content.'
    },
    {
      id:3,
      price:'$50.00 $25.00',
      title:'Sale Item',
       image:'src/assets/6c757d.jpg',
      description:'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.'
    },
    {
      id:4,
      price:'$40.00',
      title:'Popular Item',
       image:'src/assets/6c757d.jpg',
      description:'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
    },
  ]
  

   
  return(
<div style={divStyle}>  
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Start Boostrap </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Shop 
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#"></a>
          <a class="dropdown-item" href="#"></a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#"></a>
        </div>
      </li>
    
    </ul>
    <p style={cartbox1}> Cart-Item  - {counter}</p> 
  
  </div>
</nav>
<div style={divBanner}><h1>Shop in style</h1>
<p>With this shop hompeage template</p></div>
      <div style={innerdivStyle}>
        
        <div style={styles}>
          <CardNew data={data} title={data[0].title} price = {data[0].price}  description = {data[0].description} image = {data[0].image}/>
         
        </div>
      </div>
     
      
</div>
    
  )
}

export default App;
