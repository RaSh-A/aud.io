import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"

export const ProductCard = ({
    _id,
    category,
    title,
    imgUrl,
    type,
    salePrice,
    regularPrice,
    rating,
    detail
}) => {
    const { addToCart } = useContext(CartContext)
    const [added, setAdded] = useState(false)
    return <div
        style={{
            display: "inline-block",
            border: "2px solid black",
            margin: ".5rem",
            padding: ".5rem",
            maxWidth: "200px"
        }}>
        {detail
            ? <>< img
                src={
                    imgUrl
                }
                alt={
                    title
                }
                style={{
                    width: "95%",
                    textAlign: "center"
                }} />
                <h3>{title}</h3 > </> : <Link to={`/products/${_id}`}>
                <img
                    src={imgUrl}
                    alt={title}
                    style={{
                        width: "95%",
                        textAlign: "center"
                    }} />
                <h3>{title}</h3>
            </Link>
        }
        <p>{type}</p>
        <span>₹{salePrice}</span>
        <span style={{
            textDecoration: "line-through",
            color: "grey"
        }}>₹{regularPrice}</span>
        <h5>{rating}</h5>
        {added
            ? <Link to="/cart">
                <button>Go to Cart</button>
            </Link>
            : <button onClick={() => {
                addToCart(_id)
                setAdded(true)
            }}>Add to Cart</button>
        }
        <button>Wishlist</button>
    </div>
}