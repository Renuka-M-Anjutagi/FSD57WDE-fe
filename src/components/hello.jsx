const divStyle = {
  
    backgroundColor:'blue',
    height:1700,
    width:1000,
    textAlign: 'center',
    margin: '20',
    display:flex,
  
  };
  const innerdivStyle = {
  
    backgroundColor:'white',
    height:500,
    width:250,
    textAlign: 'center',
    margin: 'auto',
   
    
  };

  const month1 = [
    'Single User',
    '50 GB Storage',
    'Unlimited Public Project',
    'Community Access',
    'Unlimited Public Project',
    'Dedicated Phone Support',
    'Free Subdomain',
    'Monthly Status Report'
  ];
  const month2 = [
    'Single User',
    '50 GB Storage',
    'Unlimited Public Project',
    'Community Access',
    'Unlimited Public Project',
    'Dedicated Phone Support',
    'Free Subdomain',
    'Monthly Status Report'
  ];
  const month3 = [
    'Single User',
    '50 GB Storage',
    'Unlimited Public Project',
    'Community Access',
    'Unlimited Public Project',
    'Dedicated Phone Support',
    'Free Subdomain',
    'Monthly Status Report'
  ];
  
const Hello = (props) =>{
    const listItems1 = month1.map(person =>
        <li>{person}</li>
      );
      const listItems2 = month2.map(person =>
        <li>{person}</li>
      );
      const listItems3 = month3.map(person =>
        <li>{person}</li>
      );
    return(
      <div style={divStyle}>  
      <div style={innerdivStyle}>  
      <p> FREE</p>
      <h1>$0/Months</h1>
      <hr />

      <ul>{listItems1}</ul>
      </div>
      <div style={innerdivStyle}>  
      <p> FREE</p>
      <h1>$9/Months</h1>
      <hr />
      <ul>{listItems2}</ul>
      </div>

      <div style={innerdivStyle}>  
      <p> FREE</p>
      <h1>$49/Months</h1>

      <hr />
      <ul>{listItems3}</ul>
      </div>
       
      </div>
    )
  }

  export default Hello;