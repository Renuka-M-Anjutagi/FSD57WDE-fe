
import './card.css';

const Card = (props) => {

    
   

  return(
    <div class="card">
        <div class="card-header">
            <span><b>{props.title}</b></span>
               <h1> ${props.price} months</h1>
        </div>
    
        <div class="card-body">
           
            <p class="card-text">
             <ul>
                {
                    props.notes.map(note =>
                    <li key={note.id}>{ note.content}</li>)
                }
             </ul>
            </p>
            <a href="#" class="btn btn-primary">Button</a>
        </div>
</div>
    
  )
}

export default Card;