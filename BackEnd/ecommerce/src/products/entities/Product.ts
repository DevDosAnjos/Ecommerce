import { Category } from "src/categories/entity/Category"

export class Product {
    id : number
    name : string
    brand : string
    price : number
    category : Category
    statusStock : StatusStock
}
