import { Product } from "src/products/entities/Product";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm"

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id : number
    @Column()
    name : string
    @OneToMany(() => Product, product => product.category)
    products: Product[];
    @Column({
        type: 'enum',
        enum: StatusCategory
    })
    statusCategory : StatusCategory
}
