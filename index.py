class Product:
    def __init__(self, name, price):
        self.name = name
        self.price = price

    def display_Product_info(self):
        return f"Product Name: {self.name}, Price: ${self.price}"
class ElectronicProduct(Product):
    def set_warranty(self, warranty):
        self.warranty = warranty
    def update_price(self, new_price):
        self.price = new_price
    def display_Electronic_Product_info(self):
        return f"Electronic Product Name: {self.name}, Price: ${self.price}, Warranty: {self.warranty} years"
product1 = ElectronicProduct("Laptop", 1200)
product1.set_warranty(2)
product1.update_price(1100)
print(product1.display_Electronic_Product_info()) 