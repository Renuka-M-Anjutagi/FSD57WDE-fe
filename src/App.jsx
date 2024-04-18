import Card from "./components/Card";
import Note from "./components/Note";

const App = () => {

  const divStyle = {
  
    backgroundColor:'white',
    textAlign: 'center',
    margin: '20px',
    padding:'40px',
   
  
  }
  const innerdivStyle = {
  
    backgroundColor:'blue',
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

   const data = [
    {
      price:0,
      title:'FREE',
    },
    {
      price:9,
      title:'POST',
    },
    {
      price:49,
      title:'PRO',
    },
  ]
  const notes = [
    {
      id:0,
      content:'Single User',
      important:'true'
    },
    {
      id:1,
      content:'5 Users',
      important:'true'
    },
    {
      id:3,
      content:'Unlimitted Public Project',
      important:'true'
    },
    {
        id:4,
        content:'Community Access',
        important:'true'
    },
    {
        id:5,
        content:'Unlimitted Private Project',
        important:'true'
      },
      {
        id:6,
        content:'Dedicated Phone Support',
        important:'true'
      },
      {
        id:7,
        content:'Free Subdomain',
        important:'false'
      },
      {
        id:8,
        content:'Monthly Status Report',
        important:'false'
      },
  ]

   
  return(
<div style={divStyle}>  
<h1>React Price Card Task</h1>
<p>Reproduce this user interface using a React.js application with JSX. Write the code in a dynamic manner.</p>

      <div style={innerdivStyle}>
      
        <div style={styles}>
          <Card notes={notes} title={data[0].title} price = {data[0].price}/>
          <Card notes={notes} title={data[1].title}  price = {data[1].price}/>
          <Card notes={notes}  title={data[2].title}  price = {data[2].price}/>

        </div>
      </div>
     
      
</div>
    
  )
}

export default App;
