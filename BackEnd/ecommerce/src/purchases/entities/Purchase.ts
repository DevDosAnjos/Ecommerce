import { Order } from "src/orders/entities/Order"
import { User } from "src/users/entities/User"

export class Purchase {
    id : number
    user : User
    order : Order
    total : number
    deliveryAddress : string
    paymentMethod : PaymentMethod
}
