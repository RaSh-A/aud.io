import { createContext, useContext, useState } from "react"
import { AudContext } from "./AudContext"

export const CartContext = createContext()
export const CartProvider = ({ children }) => {
    const { state } = useContext(AudContext)
    const [cart, setCart] = useState([])
    const getCartItems = async () => {
        try {
            const res = await fetch("/api/user/cart", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "authorization": state.user.encodedToken
                }

            })
            const cartData = (await res.json()).cart
            setCart(cartData)
        } catch (e) {
            console.error("Cannot load cart data", e);
        }
    }
    const addToCart = async (id) => {
        const bodyContent = await fetch(`/api/products/${id}`)
        // console.log(bodyContent);
        try {
            const res = await fetch(`/api/user/cart`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    "authorization": state.user.encodedToken
                },
                body: JSON.stringify(await bodyContent.json())
            })
            const cartData = (await res.json()).cart
            console.log(cartData);
            setCart(cartData)
        }
        catch (e) {
            console.error("could not add to cart", e);
        }

    }
    const ctrlQty = async (id, cartAction) => {
        try {
            console.log("id", id, JSON.stringify({
                action: {
                    type: cartAction
                }
            }));
            const res = await fetch(`/api/user/cart/${id}`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    "authorization": state.user.encodedToken
                },
                body: JSON.stringify({
                    action: {
                        type: cartAction
                    }
                })
            })
            const cartData = (await res.json()).cart
            if (cartData.find(({ _id }) => id === _id).qty === 0) delCartItem(id)
            else setCart((cartData))
        } catch (e) {
            console.error("could not change quantity", e);
        }
    }
    const delCartItem = async (id) => {
        try {
            console.log(id);
            const res = await fetch(`/api/user/cart/${id}`, {
                method: "DELETE",
                headers: {
                    "content-type": "application/json",
                    "authorization": state.user.encodedToken
                }
            })
            setCart((await res.json()).cart);
        } catch (e) {
            console.error("could not delete cart Item", e);
        }
    }
    return <CartContext.Provider
        value={{
            cartVal: cart?.reduce((acc, cur) => acc + 1, 0) ?? 0,
            whishlistVal: 0,
            addToCart,
            cart,
            getCartItems,
            ctrlQty,
            delCartItem
        }}>{children}</CartContext.Provider>
}