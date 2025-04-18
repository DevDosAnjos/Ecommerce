import { Category } from "src/categories/entity/Category"
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm"

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id : number
    @Column()
    name : string
    @Column()
    brand : string
    @Column()
    price : number
    @ManyToOne(() => Category, category => category.products)
    category: Category;
    @Column({
        type: 'enum',
        enum: StatusStock
    })
    statusStock : StatusStock
}
