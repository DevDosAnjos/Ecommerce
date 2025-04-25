# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

# Create categories
categories = %w[Livros Eletrônicos Roupas Acessórios Eletrodomésticos]

categories.each do |category_name|
    Category.find_or_create_by!(name: category_name)
end

# Create products
products = [
    { name: 'Introdução a Algorítmos', brand: 'Thomas H. Cormen', price: 579.99, in_stock: 10, category_name: 'Livros' },
    { name: 'Clean Code', brand: 'Robert C. Martin', price: 199.99, in_stock: 5, category_name: 'Livros' },
    { name: 'O Senhor dos Anéis', brand: 'J.R.R. Tolkien', price: 89.99, in_stock: 20, category_name: 'Livros' },
    { name: 'iPhone 14', brand: 'Apple', price: 999.99, in_stock: 15, category_name: 'Eletrônicos' },
    { name: 'Samsung Galaxy S21', brand: 'Samsung', price: 799.99, in_stock: 8, category_name: 'Eletrônicos' },
    { name: 'MacBook Pro', brand: 'Apple', price: 2499.99, in_stock: 5, category_name: 'Eletrônicos' },
    { name: 'Camiseta Básica', brand: 'Hering', price: 49.99, in_stock: 50, category_name: 'Roupas' },
    { name: 'Calça Jeans', brand: 'Taco', price: 89.99, in_stock: 30, category_name: 'Roupas' },
    { name: 'Tênis Esportivo', brand: 'Asics', price: 129.99, in_stock: 20, category_name: 'Roupas' },
    { name: 'Relógio de Pulso', brand: 'Marca A', price: 199.99, in_stock: 15, category_name: 'Acessórios' },
    { name: 'Óculos de Sol', brand: 'Marca B', price: 79.99, in_stock: 25, category_name: 'Acessórios' },
    { name: 'Pulseira de Couro', brand: 'Marca C', price: 39.99, in_stock: 40, category_name: 'Acessórios' },
    { name: 'Geladeira', brand: 'Marca D', price: 1999.99, in_stock: 10, category_name: 'Eletrodomésticos' },
    { name: 'Máquina de Lavar', brand: 'Marca E', price: 1499.99, in_stock: 8, category_name: 'Eletrodomésticos' },
    { name: 'Fogão', brand: 'Marca F', price: 899.99, in_stock: 12, category_name: 'Eletrodomésticos' },
]

products.each do |product|
    category = Category.find_by(name: product[:category_name])
    Product.find_or_create_by!(name: product[:name],
                               brand: product[:brand],
                               price: product[:price],
                               in_stock: product[:in_stock],
                               category_id: category.id)
end