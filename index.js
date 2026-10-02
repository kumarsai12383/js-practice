class Product{
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    updatePrice(newPrice) {
        this.price = newPrice;
    }
    display_product_Info() {
        console.log(`Product Name: ${this.name}, Price: $${this.price}`);
    }
}
class ElectronicProduct extends Product{
    constructor(name, price, warranty) {
        super(name, price);
        this.warranty = warranty;
    }
    display_Electronic_product_Info() {
        console.log(`Electronic Product Name: ${this.name}, Price: $${this.price}, Warranty: ${this.warranty} years`);
    }
}
product1 = new ElectronicProduct("Laptop", 1200, 2);
product1.display_product_Info();
product1.updatePrice(1100);
product1.display_product_Info();