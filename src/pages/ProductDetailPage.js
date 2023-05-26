import { useEffect, useState } from "react"
import { useParams } from "react-router";

// import { AudContext } from "../context/AudContext";
import { ProductCard } from "../components/ProductCard";
import { Link } from "react-router-dom";

export const ProductDetailPage = () => {
    const { productID } = useParams()
    console.log(productID);
    const [product, setProduct] = useState({})
    const getProduct = async (productID) => {
        try {
            const res = await fetch(`/api/products/${productID}`)
            const prod = await res.json()
            console.log(prod.product);
            setProduct(prod.product)
        } catch (e) {
            console.error(e);
        }
    }
    useEffect(() => {
        getProduct(productID)
    }, [])
    return <><ProductCard {...product} detail />
        <Link to="/">
            <button style={{ display: "block", textAlign: "center", margin: "0 auto" }}>continue shopping</button>
        </Link>
    </>
}