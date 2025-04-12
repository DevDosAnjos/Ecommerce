import { Product } from "src/products/entities/Product"
import { Order } from "./Order"

export class Item{
    id : number
    product : Product
    quantity : number
    order : Order
}