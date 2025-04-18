import { User } from "src/users/entities/User"
import { Item } from "./Item"
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm"

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id : number
    @ManyToOne(() => User, user => user.orders)
    user : User
    @OneToMany(() => Item, item => item.order, { cascade: true, eager: true })
    items: Item[]
}
