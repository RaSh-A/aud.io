import { useContext } from "react"
import { Header } from "../components/Header"
import { AudContext } from "../context/AudContext"
import { ProductCard } from "../components/ProductCard"

export const Landing = () => {
    const { state } = useContext(AudContext)
    
    function selectRandomObjects(array, count) {
        if (count > array.length) {
            // console.warn('Requested count exceeds array length. Returning all objects.');
            return array;
        }

        return array.reduce((selectedObjects, currentObject) => {
            // Generate a random number between 0 and 1
            const random = Math.random();

            // If random number is less than the desired selection rate, add the object to the selected array
            if (random < count / array.length) {
                selectedObjects.push(currentObject);
                count--;
            }

            return selectedObjects;
        }, []);
    }

    // Usage example
    const selectedObjects = selectRandomObjects(state.products, 12);
    //   console.log(selectedObjects)
    // console.log(data);
    return <>
        <Header />
        {/* Carousel */}
        <div style={{ display: "block", aspectRatio: "2:1" }}>
            <img src="https://cdn.shopify.com/s/files/1/0153/8863/files/headphone-zone-focal-banner-desktop.jpg?v=1683634941&width=1600" alt="carousel-img-1" />
        </div>
        {/* Products */}
        <div>
            <h2>Deals of the Month</h2>
            <div>
                {
                    selectedObjects.map(x => <ProductCard {...x} key={x.id} />)
                }
            </div>
        </div>

        {/* Reviews Section */}
        <div>
            <h1>Reviews</h1>
            <h2>One of the best places for audiophiles</h2>
            <p>- randompp@123</p>
        </div>

        {/* Newsletter */}

        <form style={{ display: "flex", flexFlow: "column", gap: "1rem" }}>
            <h1>Newsletter</h1>
            <label>
                Email : <input type="email" placeholder="email" />
            </label>
            <label>
                Contact : <input type="number" placeholder="Phone Number" />
            </label>
            <label>
                Comments : <input type="textArea" placeholder="Comments" />
            </label>
        </form>
    </>
}