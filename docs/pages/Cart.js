import { useContext, useEffect } from "react"
import { CartContext } from "../context/CartContext"
import { CartCard } from "../components/CartCard";
import { Header } from "../components/Header";

export const Cart = () => {
    const { cart, getCartItems } = useContext(CartContext);
    const subtotal = cart?.reduce((acc, cur) => acc + (Number(cur.salePrice.replace(/,/g, '')) * Number(cur.qty)), 0)
    useEffect(() => {
        getCartItems()
    }, [])
    return <>
        <Header />
        <div style={{ display: "flex", flexDirection: "column" }}>
            {
                cart?.map(x => <CartCard {...x} key={x._id} />)
            }
        </div>
        {
            cart?.length ?
                <div>
                    <h2>Order Info</h2>
                    <div>
                        <p>
                            subtotal : ₹{subtotal}
                        </p>
                        <p>
                            Shipping : ₹50
                        </p>
                        <p>
                            Total : {subtotal + 50}
                        </p>
                    </div>
                </div>
                : ""
        }
    </>
}