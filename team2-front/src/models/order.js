export class Order{
    constructor(customer, datePlaced,shipped,completed,dateCompleted, productQuantity){
        this.customer = customer;
        this.datePlaced = datePlaced;
        this.shipped = shipped;
        this.completed = completed;
        this.dateCompleted = dateCompleted;
        this.productQuantity = productQuantity; // will be dictionary: {productId: quantity} e.g {1:5,2:21,7:2,41:3,6:2 }
    }
}