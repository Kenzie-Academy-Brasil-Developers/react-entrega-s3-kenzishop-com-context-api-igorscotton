import { createContext, useState, useContext} from 'react'



export const CartContext = createContext([]);


export const CartProvider = ({children}) => {      
      const [cart, setCart] = useState(JSON.parse(localStorage.getItem('@cartProducts')) || [])

      const addToCart = (product) => {
            localStorage.setItem('@cartProducts', JSON.stringify([...cart, product]))
            setCart([...cart, product])         
      }

      const removeFromCart = (product) => {
            const newCart = cart.filter((item) => {
                  return item.id !== product.id
            })

            localStorage.setItem('@cartProducts', JSON.stringify(newCart))
            setCart(newCart)            
      }

      return (
            <CartContext.Provider value={{cart, setCart, addToCart, removeFromCart}}>
                  {children}
            </CartContext.Provider>
      )
}

export const useCart = () => useContext(CartContext)