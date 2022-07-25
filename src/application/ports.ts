import { Cart } from '../domain/cart'
import { Order } from '../domain/order'
import { UserName, User } from '../domain/user'

export interface PaymentService {
  tryPay(amount: PriceCents): Promise<boolean>
}

export interface NotificationService {
  notify(message: string): void
}

export interface AuthenticationService {
  auth(name: UserName, email: Email): Promise<User>
}

export interface OrdersStorageService {
  orders: Order[]
  updateOrders(orders: Order[]): void
}

export interface CartStorageService {
  cart: Cart
  updateCart(cart: Cart): void
  emptyCart(): void
}

export interface UserStorageService {
  user?: User
  updateUser(user: User): void
}
