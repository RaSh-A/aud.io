import { useContext } from "react"
import { CartContext } from "../context/CartContext"

export const CartCard = ({
    imgUrl,
    title,
    salePrice,
    regularPrice,
    type,
    qty,
    _id
}) => {
    const { ctrlQty, delCartItem } = useContext(CartContext)
    return <div style={{ display: "flex" }}>
        <img src={imgUrl} alt={title} style={{ width: "100px", height: "100px", borderRadius: "10px" }} />
        <div style={{ display: "flex", flexDirection: "column" }}>
            <h3>{title}</h3>
            <p style={{ fontSize: ".5rem", color: "grey" }}>{type}</p>
            <p>₹{salePrice} <span style={{ textDecoration: "line-through" }}>₹{regularPrice}</span></p>
            <div>
                <button onClick={() => ctrlQty(_id, "decrement")}>-</button>
                <span>{qty}</span>
                <button onClick={() => ctrlQty(_id, "increment")}>+</button>
            </div>
        </div>
        <button onClick={() => delCartItem(_id)}>delete</button>

    </div>
}