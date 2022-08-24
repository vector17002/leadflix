import './card.css'

const Card =(props)=>{
  return (
  <div className="card">
    <img src={props.imgsrc} alt="default" className="card_img"/>
    <div className="card_info">
        <span className="card_category">IMDb:{props.rating}</span>
        <h3 className="card_title">{props.sname}</h3>
        <a href={props.link} target="_blank">
            <button>Watch Now</button>
        </a>
    </div>
 </div>)
}
export default Card;