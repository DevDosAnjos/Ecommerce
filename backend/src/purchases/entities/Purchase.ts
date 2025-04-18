import { Order } from "src/orders/entities/Order"
import { User } from "src/users/entities/User"
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne } from "typeorm"

@Entity()
export class Purchase {
    @PrimaryGeneratedColumn()
    id : number
    @ManyToOne(() => User, user => user.purchases)
    user : User
    @OneToOne(() => Order, { eager: true })
    order : Order
    @Column()
    total : number
    @Column()
    deliveryAddress : string
    @Column({
        type: 'enum',
        enum: PaymentMethod
    })
    paymentMethod : PaymentMethod
}
