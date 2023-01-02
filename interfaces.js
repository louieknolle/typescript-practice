//similar to type aliases, different syntax
//allow us to describe the shape of objects and only objects
var pt = { x: 123, y: 1234 };
var thomas = {
    first: "Thomas",
    last: "hardy",
    nickname: "Tom",
    id: 1234,
    sayHi: function () {
        return "hello";
    }
};
thomas.first = "thjs";
var shoes = {
    name: "blue suede shoes",
    price: 100,
    applyDiscount: function (amount) {
        var newPrice = this.price * (1 - amount);
        this.price = newPrice;
        return newPrice;
    }
};
console.log(shoes.applyDiscount(0.4));
