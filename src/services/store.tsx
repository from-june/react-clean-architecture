import React, { useState, useContext } from 'react'
import { Cart } from '../domain/cart'
import { Order } from '../domain/order'
import { User } from '../domain/user'
import { cookies } from './fakeData'

const StoreContext = React.createContext<any>({})
export const useStore = () => useContext(StoreContext)

export const Provider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>()
  const [cart, setCart] = useState<Cart>({ products: [] })
  const [orders, setOrders] = useState<Order[]>([])

  const value = {
    user,
    cart,
    cookies,
    orders,
    updateUser: setUser,
    updateCart: setCart,
    updateOrders: setOrders,
    emptyCart: () => setCart({ products: [] }),
  }

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}
