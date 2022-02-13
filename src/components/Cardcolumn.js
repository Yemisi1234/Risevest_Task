import './Cards.css';

export default function Card(props){
    return (
        <div>
            <div className='cards'>
                        <div className='card_color'></div>
                        <div className='cards-items'>
                            <img src={props.img} className='cards_img' alt="icons"/>
                            <h2>{props.title}</h2>
                            <p>{props.description}</p>
                            <p>{props.returns}</p>
                            <h3>{props.continue}</h3>
                        </div>
                        </div>
        </div>
      )
    
}
  
