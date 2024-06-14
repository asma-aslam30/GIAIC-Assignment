function Making_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Dear sir you order is being prepared with an item you list as: ");
    for (var i = 0; i < items.length; i++) {
        console.log("".concat(items[i]));
    }
}
Making_sandwich("cheese", "olives", "vegies");
Making_sandwich("cheese", "mushrooms", "vegies");
Making_sandwich("cheese", "olives", "coke", "mushrooms", "extra vegies");
