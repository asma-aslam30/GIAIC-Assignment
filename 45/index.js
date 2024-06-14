function car_info(manufacturer, model, color) {
    if (color === void 0) { color = "navy blue"; }
    var features = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        features[_i - 3] = arguments[_i];
    }
    var Car_info = {
        Manufacturer: manufacturer,
        Model: model,
        Color: color,
        Features: features
    };
    // Car_info.Color = color;
    // Car_info.feature=features;
    return Car_info;
}
console.log(car_info("Honda", "2017", "Black", "automatic", "sound_proof"));
console.log(car_info("Honda", "2017", "Green", "Bullet_proof", "sound_proof"));
