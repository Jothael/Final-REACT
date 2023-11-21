import "./Cart.css"
import borrar from "./assets/borrar.png"
import { useCart } from "../../context/CartContext"
import { Link } from"react-router-dom"

export const Cart = () => {
    const { cart, clearCart, removeItem, totalQuantity, total } = useCart()

    if(totalQuantity === 0) {
        return (
            <div className="carritoVacio">
                <h2>No hay items en el carrito</h2>
                <Link to="/" className="cartLinkProducts">Página principal</Link>
            </div>
        )
    } else {
        return (
            <div className="carritoConProductos">
            
                <h2 className="PrincipalPrecio">Detalle del pedido</h2>
                {
                    cart.map(prod => {
                        return (
                            <div key={prod.id} className="productContainer">
                                <h3 className="PrincipalPrecio">{prod.quantity} unidades de {prod.name} </h3>
                                <h4 className="tituloPrecioUnitario">Precio unitario ${prod.price}</h4>
                                <img src={prod.image} className="imagenProductoEncarrito" />
                                <button onClick={() => removeItem(prod.id)} className="botonEliminarDelCarrito">
                                    <img src={borrar} className="imagenBorrar" />
                                </button>
                            </div>
                        )
                    })
                }
                <h3>Total: ${total}</h3>
                <button onClick={() => clearCart()} className="Boton">Limpiar carrito</button>
                <Link to="/checkout" className="Boton">Checkout</Link>
            </div>
        )
    }
}

