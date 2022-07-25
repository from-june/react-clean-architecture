import { Cart } from '../domain/cart'
import { createdOrder } from '../domain/order'
import { User } from '../domain/user'
import { useNotifier } from '../services/notificationAdapter'
import { usePayment } from '../services/paymentAdapter'
import { useCartStorage, useOrderStorage } from '../services/storageAdapter'

export function useOrderProducts() {
  const notifier = useNotifier()
  const payment = usePayment()
  const orderStorage = useOrderStorage()
  const cartStorage = useCartStorage()

  async function orderProducts(user: User, cart: Cart) {
    const order = createdOrder(user, cart)

    const paid = await payment.tryPay(order.total)
    if (!paid) return notifier.notify(`The payment wasn't successful.`)

    const { orders } = orderStorage
    orderStorage.updateOrders([...orders, order])
    cartStorage.emptyCart()
  }

  return { orderProducts }
}
