import ItemCount from "../ItemCount/ItemCount"
const ItemDetail = ({name, image , price, stock, description }) => {
    return(
     <div>
        <p>{name}</p>
         <img src={image} style={{width:100}} />
         <p>${price}</p>
         <p>Descripción : {description}</p>
        <ItemCount stock={stock}/>
      </div>
    ) 
 }
 export default ItemDetail