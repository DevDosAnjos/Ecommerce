import { User } from "src/users/entities/User"
import { Item } from "./Item"

export class Order {
    id : number
    user : User
    items: Item[]
}
