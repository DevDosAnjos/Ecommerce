import { Order } from "src/orders/entities/Order";
import { Purchase } from "src/purchases/entities/Purchase";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id : number
    @Column()
    username : string
    @Column()
    password : string
    @OneToMany(() => Order, order => order.user)
    orders: Order[];
    @OneToMany(() => Purchase, purchase => purchase.user)
    purchases: Purchase[];    
    @Column({
        type: 'enum',
        enum: UserRole
    })
    userRole : UserRole
}
