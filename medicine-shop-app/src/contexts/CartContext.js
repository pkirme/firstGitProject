import { createContext, useContext } from "react";
export const CartContext=createContext({
    carts:[{
        medicine:[],
        totalAmount:0
    }],
    addToCart:(medicine)=>{}
});

export const useCart=()=>{
    return useContext(CartContext);
}

export const CartContextProvider=CartContext.Provider;