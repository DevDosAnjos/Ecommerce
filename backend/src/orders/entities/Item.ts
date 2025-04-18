import { Product } from "src/products/entities/Product"
import { Order } from "./Order"
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm"

@Entity()
export class Item{
    @PrimaryGeneratedColumn()
    id : number
    @ManyToOne(() => Product)
    product : Product
    @Column()
    quantity: number;
    @ManyToOne(() => Order, order => order.items, { onDelete: 'CASCADE' })
    order : Order
}