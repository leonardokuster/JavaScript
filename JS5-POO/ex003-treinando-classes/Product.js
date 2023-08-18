class Product {
    constructor(name, description, price) {
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }

    addOnStock(quantity) {
        this.inStock += quantity
    }

    calculateDiscount(discount) {
        return this.price * ((100 - discount) / 100)
      }
}


const leite = new Product("Leite", "Leite desnatado zero lactose", 5.99)

console.log(leite)

leite.addOnStock(10)

console.log(leite)
console.log(leite.calculateDiscount(10))