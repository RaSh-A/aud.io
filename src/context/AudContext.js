import { useEffect, createContext, useReducer } from "react";

export const AudContext = createContext()

export const AudProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "products":
        return {
          ...state,
          products: action.payload
        }
      case "categories":
        return {
          ...state,
          categories: action.payload
        }
      case "user":
        return {
          ...state,
          user: action.payload
        }
      default:
        return state
    }
  }
  const [state,
    dispatch] = useReducer(reducer, {
      user: {
        foundUser:{_id: null,
        firstName: null,
        lastName: null,
        email: null,
        password: null,
        createdAt: null,
        updatedAt: null},
        encodedToken:null
      },
      categories: [],
      products: []
    })
  const fetchData = async () => {
    try {
      const res = (await fetch("/api/products"))
      const main = (await res.json()).products
      dispatch({ type: "products", payload: main })
      const res2 = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ email: "balika@gmail.com", password: "adarshbalika" })
      })
      const main2 = (await res2.json())
      dispatch({ type: "user", payload: main2 })
    } catch (e) {
      console.error(e);
    }
  }
  useEffect(() => {
    fetchData()
  }, [])
  useEffect(() => {
    console.log(state);
  }, [state])
  return <AudContext.Provider value={{
    state,
    dispatch
  }}>{children}</AudContext.Provider>
}
