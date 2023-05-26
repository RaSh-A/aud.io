import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export const Header = () => {
  const navigate = useNavigate();
  const { cartVal } = useContext(CartContext);
  return (
    <header
      style={{
        width: "100%",
        height: "20%",
        backgroundColor: "#F0B52D",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "5rem",
          padding: "1rem",
          marginLeft: "5rem",
        }}
      >
        <Link to="/">
          <img src="/logo.svg" alt="aud.io" />
        </Link>
      </div>
      <nav style={{}}>
        <label for="category">
          Category
          <select
            name="category"
            id="category"
            onChange={(e) => navigate(`/${e.target.value}`)}
          >
            <option value="headphones">Headphones</option>
            <option value="in-ears">in Ears</option>
            <option value="tws">Truly Wireless</option>
          </select>
        </label>
      </nav>

      <div
        style={{
          marginRight: "5rem",
        }}
      >
        <input
          type="text"
          style={{
            borderRadius: "1rem",
            height: "36%",
          }}
        />
        ||
        <Link to="/account">Account</Link>
        ||
        <Link to="/wishlist">WishList</Link>
        ||
        <Link to="/cart">Cart({cartVal})</Link>
      </div>
    </header>
  );
};
