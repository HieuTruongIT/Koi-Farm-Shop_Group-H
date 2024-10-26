import { create } from 'zustand'

const localCart = JSON.parse(localStorage.getItem("cart") ?? "[]")

const useStore = create((set) => ({
    cart: localCart,
    addCart: (item) => set((state) => {
        const currentCart = state.cart
        const foundIndex = currentCart.findIndex(cartItem => cartItem.id === item.id)

        if (foundIndex === -1) {
            const itemWithQuantity = { ...item, quantity: 1 }
            const newCart = [...currentCart, itemWithQuantity]

            localStorage.setItem("cart", JSON.stringify(newCart))

            return ({
                cart: newCart
            })
        } else {
            currentCart[foundIndex].quantity++
            localStorage.setItem("cart", JSON.stringify(currentCart))

            return ({
                cart: currentCart
            })
        }
    }),
    removeCart: (itemId) => set((state) => {
        const currentCart = state.cart
        const foundIndex = currentCart.findIndex(item => item.id === itemId)

        console.log(foundIndex);

        if (foundIndex !== -1) {
            currentCart.splice(foundIndex, 1)
            localStorage.setItem("cart", JSON.stringify(currentCart))
            return ({
                cart: currentCart
            })
        }
        else {
            localStorage.setItem("cart", JSON.stringify(currentCart))
            return ({
                cart: currentCart
            })
        }
    })
}))

export { useStore }