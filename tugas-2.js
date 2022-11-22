const groceries = [
  {
    Id: "3",
    orderId: "001",
    productId: "TX",
    price: 50,
    qty: 5,
  },
  {
    Id: "4",
    orderId: "002",
    productId: "CA",
    price: 60,
    qty: 4,
  },
  {
    Id: "5",
    orderId: "003",
    productId: "NY",
    price: 40,
    qty: 3,
  },
];

class OrderItem {
  constructor(Id, orderId, productId, price, qty) {
    this.Id = Id;
    this.orderId = orderId;
    this.productId = productId;
    this.price = price;
    this.qty = qty;
  }
  calculatePrice(items) {
    let totalPrice = 0;
    this.price = 0;
    this.qty = 0;
    items.map((item) => {
      this.price += item.price;
      this.qty += item.qty;
    });
    totalPrice = this.price * this.qty;
    return totalPrice;
  }
}

let myOrderItems = new OrderItem();

console.log("your total expenses for today groceries are", myOrderItems.calculatePrice(groceries),"$");
