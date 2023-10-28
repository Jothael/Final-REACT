import { Link } from "react-router-dom"

const Item = ({id, name, image, price}) => {
   return(
    <div>
       <p>{name}</p>
        <img src={image} style={{width:100}} />
        <p>${price}</p>
        <Link to={`/item/${id}`}>Ver detalle</Link>
     </div>
   ) 
}
export default Item